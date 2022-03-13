import './App.css';
import Header from './component/Header';

function App() {
  //use Arrow function
  //use random function
  const handleNameChange = () => {
    const names = ['orange', 'apple', 'pink'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>

    </div>
  );
}

export default App;
