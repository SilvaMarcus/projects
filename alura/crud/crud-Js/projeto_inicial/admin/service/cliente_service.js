


// ==========REQUISICAO FETCHAPI que nos retorna uma promise

  const listaClientes = () => {

    return fetch(`http://localhost:3000/profile`) 
    .then((data) => {
       
        return data.json() 

  })
} //========== REQUISICAO FETCHAPI que nos retorna uma promise



// objeto que esta sendo exportado 
export const clienteService = {
    listaClientes // listaclientes dentro do objeto para ser acessado como metodo. 
};

