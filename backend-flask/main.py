from flask import Flask, request, jsonify
from flask_restful import Api
from flask_cors import CORS
import numpy as np
import pickle
import joblib
import pandas as pd
import traceback
import asyncio
from notificationapi_python_server_sdk import notificationapi

# Function to send notifications
async def send_notification(cause):
    notificationapi.init(
        "9nycw3q70kxl3tkmrdsv8couh5",  # clientId
        "0sgfbgm1j29sm85a087fz4rf6lfy53ae402no44xs9u9nhbv72x0rpdbdr" # clientSecret
    )

    await notificationapi.send({
        "notificationId": "attention_required_",
        "user": {
            "id": "anky422003@gmail.com",
            "email": "anky422003@gmail.com",
            "number": "+919209067817" # Re
        },
        "mergeTags": {
            "comment": f"The following parameter is causing machine failure: {cause}",
            "commentId": "testCommentId"
        }
    })

# Initialize Flask app
app = Flask(__name__)
CORS(app)
api = Api(app)

# Load the pre-trained model and scaler
try:
    loaded_model = pickle.load(open('logistic_regression_model.pkl', 'rb'))
    sc = joblib.load('std_scaler.bin')
except Exception as e:
    print(f"Error loading model or scaler: {e}")
    raise

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get the data from the request
        data = request.get_json()

        # Extract the features from the request data
        air_temp = data.get('air_temp')
        process_temp = data.get('process_temp')
        rotational_speed = data.get('rotational_speed')
        torque = data.get('torque')
        tool_wear = data.get('tool_wear')

        # Validate and convert the input data to float
        if None in [air_temp, process_temp, rotational_speed, torque, tool_wear]:
            return jsonify({"error": "Invalid input data"}), 400

        try:
            air_temp = float(air_temp)
            process_temp = float(process_temp)
            rotational_speed = float(rotational_speed)
            torque = float(torque)
            tool_wear = float(tool_wear)
        except ValueError:
            return jsonify({"error": "Invalid input data type"}), 400

        # Create a DataFrame with the feature names the scaler was trained with
        feature_names = [
            "Air temperature [K]",
            "Process temperature [K]",
            "Rotational speed [rpm]",
            "Torque [Nm]",
            "Tool wear [min]"
        ]

        # Create a DataFrame from the input data
        input_data_df = pd.DataFrame([{
            "Air temperature [K]": air_temp,
            "Process temperature [K]": process_temp,
            "Rotational speed [rpm]": rotational_speed,
            "Torque [Nm]": torque,
            "Tool wear [min]": tool_wear
        }], columns=feature_names)

        # Check the DataFrame dtypes
        print(f"DataFrame dtypes: {input_data_df.dtypes}")

        # Prepare the input data for the model
        input_data_scaled = sc.transform(input_data_df)

        # Make predictions
        predictions = loaded_model.predict(input_data_scaled)

        # Convert predictions to a list for JSON serialization
        prediction_result = predictions.tolist() if isinstance(predictions, np.ndarray) else predictions

        # Extract values based on index and map to the required keys
        if len(prediction_result) > 0:
            new_list = prediction_result[0]
        else:
            new_list = [None] * 6  # Ensure there are 6 elements even if prediction is empty

        cause = None
        for i, ele in enumerate(new_list):
            if ele == 1:
                cause = feature_names[i]  # Get the name of the parameter causing failure
                asyncio.run(send_notification(cause))
                break

        # Define the mapping
        keys = ["Machine failure", "TWF", "HDF", "PWF", "OSF", "RNF"]

        # Create a dictionary with the specified keys
        result = {key: new_list[i] for i, key in enumerate(keys)}

        # Return the prediction as a JSON response
        return jsonify(result)

    except Exception as e:
        # Log the error with traceback
        print(f"Error during prediction: {e}")
        print(traceback.format_exc())
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=6060)
