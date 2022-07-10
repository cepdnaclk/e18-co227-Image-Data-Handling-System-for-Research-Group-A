import './App.css';
import RouterPage from './pages/RouterPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Upload from './pages/Upload';
import View from './pages/View';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterPage>
          <Home />
          <Signup />
          <Login />
          <Upload />
          <View />
        </RouterPage>
      </header>
    </div>
  );
}

export default App;
