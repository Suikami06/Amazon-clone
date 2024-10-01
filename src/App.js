import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Header/Navbar'; 
import { NewNav } from './Components/Header/NewNav'; 
import {Banner} from './Components/Banner';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <NewNav/>
      <Banner/>
    </div>
  );
}

export default App;
