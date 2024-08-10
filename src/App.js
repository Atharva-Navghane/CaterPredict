import { styled } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ModelWork from './Components/ModelWork';
import { AuthProvider } from './firebase/useAuth';
import Homepage from './Pages/Homepage';
import Makers from './Pages/Makers';

const AppContainer = styled('div')({
  backgroundColor: 'f5f5dc',
  color: 'white',
  minHeight: '100vh',
});

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact />
            <Route path="/modelwork" element={<ModelWork />} />
            <Route path="/makers" element={<Makers />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB1RzHi-P5Bjj53oirPros2pWT8izJLLnU",
//   authDomain: "caterpredict-22aed.firebaseapp.com",
//   projectId: "caterpredict-22aed",
//   storageBucket: "caterpredict-22aed.appspot.com",
//   messagingSenderId: "1064908597156",
//   appId: "1:1064908597156:web:5fb41b12e8921dea660331"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);