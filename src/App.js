import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'


function App() {

  const nome = 'Arcanjo'

  return (
    <div className="App">
        <HelloWorld />
        <SayMyName nome = {nome} />
    </div>
  );
}

export default App;
