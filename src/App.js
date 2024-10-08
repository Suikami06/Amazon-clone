import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Header/Navbar'; 
import { NewNav } from './Components/Header/NewNav';
import MainCompt from './Components/Home/MainComp';
import Footer from './Components/Footer/Footer';
import Signup from './Components/Signup_Signin/Signup';
import Signin from './Components/Signup_Signin/Signin';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import Buynew from './Components/Buynow/BuyNew';



function App() {
  return (
    <Router>

      <div className="App">
          <Navbar/>
          <NewNav/>
          <Routes>
            <Route path = "/" element = {<MainCompt/>}/>
            <Route path = "/signup" element = { <Signup/>}/>
            <Route path = "/login" element = {  <Signin/>}/>
            <Route path = "/cart" element = {<Buynew/>}/>
          </Routes>
          
          <Footer/> 
      </div>
    </Router>
    
  );
}

export default App;
