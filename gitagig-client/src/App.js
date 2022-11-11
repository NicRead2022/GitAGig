
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <main>
          <Main/>
        </main>
      </header>
    </div>
  );
}

export default App;
