import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Subjects from './Subjects';
import PickPet from './PickPet';
import NamePet from './NamePet';
import Home from './Home';
import Statstics from './Statistics';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/subjects" element={<Subjects />} />  
        <Route path="/pickpet" element={<PickPet />} />
        <Route path='/namepet' element={<NamePet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/statistics" element={<Statstics/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;