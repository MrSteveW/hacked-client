import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Subjects from './Subjects';
import PickPet from './PickPet';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/subjects" element={<Subjects />} />  
        <Route path="/pickpet" element={<PickPet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;