import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'


function App() {



  return (
    <div className="App">
 
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
