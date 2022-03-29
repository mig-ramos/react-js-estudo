function Form(){


    function cadastrarUsuario(e){
        e.preventDefault()  // Vai parar a execucao do formulario
        console.log("Cadastrou usuario")

    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                <input type="submit" value="Cadastrar" />
            </div>
            </form>
           
        </div>
    )
}

export default Form