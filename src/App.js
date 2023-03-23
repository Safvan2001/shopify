import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './Footer';
import Shop from './components/Shop';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ViewAllProduct from './components/Jwl';
import ShopCard from './components/ShopCard';
import Men from './components/Men';
import Wmn from './components/Wmn';
import ViewItem from './components/ViewItem';

import Electro from './Electro';
function App() {
  return (
    <div className="App">
     <Router>
        <Header/>
        
  
       <Routes>
       <Route path='/' element={<Shop/>}/>
         <Route path='/ViewAllProduct' element={<ViewAllProduct/>}></Route>
         <Route path='/Men' element={<Men/>}></Route>
         <Route path='/Wmn' element={<Wmn/>}></Route>
         <Route path='/Electro' element={<Electro/>}></Route>
         <Route path='/ViewItem/:id' element={<ViewItem/>}></Route>

         
       </Routes>
  
  
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
