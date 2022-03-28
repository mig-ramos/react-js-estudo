import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase';


function App() {



  return (
    <div className="App">
        <h1>Testando css</h1>
        <Frase />
        <Frase />
        <Pessoa  
        nome="Miguel"
        idade ="62" 
        profissao = "Desenvolvedor" 
        foto="https://via.placeholder.com/150" 
        />
       
    </div>
  );
}

export default App;
