import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home.js';
import About from './routes/About';
import Products from './routes/Products';
import Contact from './routes/Contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
  );
}

export default App;
