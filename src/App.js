import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import Pantries from './pages/Pantries/Pantries';
import Pantry from './pages/Pantry/Pantry';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>

        <Route path='/my-pantry' element={<Pantries/>}/>
        <Route path='/my-pantry/:id' element={<Pantry/>}></Route>
        <Route path='/friend-pantry'/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
