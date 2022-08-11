
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/addProduct/AddProduct';


import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='addProduct' element={<AddProduct></AddProduct>} ></Route>
        
      </Routes>
    
      
    </div>
  );
}

export default App;
