import './App.css';
import RouterPage from './pages/RouterPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useState ,useEffect } from 'react';

function App() {


  
  return (
    <div className="App">
      <header className="App-header">
        <RouterPage>
          <Home />
          <Signup />
          <Login />
        </RouterPage>
      </header>
    </div>
  );
}

export default App;
