import { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { CheckSession } from './services/Auth'


function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }


  return (
    <div className="App">
      <header className="App-header">
        <Header authenticated={authenticated} user={user} handleLogOut={handleLogOut}/>
      </header>
        <main>
          <Main toggleAuthenticated={toggleAuthenticated} authenticated={authenticated} bandleader={user} setBandleader={setUser} checkToken={checkToken}/>
        </main>
    </div>
  );
}

export default App;
