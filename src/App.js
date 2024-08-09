import { styled } from '@mui/system';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ModelWork from './Components/ModelWork';
import Homepage from './Pages/Homepage';

const AppContainer = styled('div')({
  backgroundColor: 'f5f5dc',
  color: 'white',
  minHeight: '100vh',
});

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/modelwork" element={<ModelWork />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
