import { styled } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ModelWork from './Components/ModelWork';
import { AuthProvider } from './firebase/useAuth';
import Appointment from './Pages/Appointment';
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
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/makers" element={<Makers />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;