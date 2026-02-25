import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Subjects from './Subjects';
import PickPet from './PickPet';
import NamePet from './NamePet';
import Home from './Home';
import Statstics from './Statistics';
import NotAdded from './Not';
import Feed from './Feed';
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
        <Route path="/feed" element={<Feed/>} />
        <Route path="*" element={<NotAdded/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;