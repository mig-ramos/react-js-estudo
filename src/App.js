import './App.css';



function App() {
  const name = 'Miguel'

  function sum(a,b){
    return a + b
  }
const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {name}</p>
      <p>Soma {sum(4,5)}</p>
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
