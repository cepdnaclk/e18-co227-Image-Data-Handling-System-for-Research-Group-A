
import RouterPage from './pages/RouterPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState ,useEffect } from 'react';
import Admin from './pages/admin';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import  './style.css';

function App() {


  
  return (
    <div className="App">
      <header className="App-header">
        <RouterPage>
          <Home />
          <Signup />
          <Login />
          <Admin />
        </RouterPage>
      </header>
    </div>
  );
}

export default App;
