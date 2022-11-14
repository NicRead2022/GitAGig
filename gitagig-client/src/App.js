import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <header className="App-header">
        <Header authenticated={authenticated} user={user}/>
      </header>
        <main>
          <Main toggleAuthenticated={toggleAuthenticated} authenticated={authenticated} bandleader={user} setBandleader={setUser}/>
        </main>
    </div>
  );
}

export default App;
