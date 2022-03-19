import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Component/Navbar';
import Form from'./Component/Form.js';
import Login from './Component/Login.js';
import Container from './Component/Container.js';
import About from './Component/About.js';
import Nomatch from './Component/Nomatch'
import {Routes, Route} from 'react-router-dom';

function App() { 
  return(
    <>
      <div id= 'cmpName'><h1>Jayshree`s IT solution</h1></div>
      <Navbar/>
      <Routes>
          <Route index element = {<Form/>}></Route>
          <Route path ='/container' element = {<Container/>}></Route>
          <Route path ='/about' element = {<About/>}></Route>
          <Route path ='/login' element={<Login/>}></Route>
          <Route path ='*' element={<Nomatch/>}></Route>
      </Routes>  
    </>
  );
}
export default App;
