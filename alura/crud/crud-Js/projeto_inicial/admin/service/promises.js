
 const criarNovalinha = (nome,email) =>{
    const novaLinhaTr = document.createElement('tr') 

    const conteudo_html = ` <td class="td" data-td>${nome}</td> 
                                <td>${email}</td>
                                    <td>
                                        <ul class="tabela__botoes-controle">
                                                <li>
                                                    <a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a>
                                                </li>
                                                <li>
                                                    <button class="botao-simples botao-simples--excluir" type="button">Excluir</button>
                                                </li>
                                        </ul>
                                        </td>`;

   novaLinhaTr.innerHTML = conteudo_html; 
    return novaLinhaTr;   
};   

const tabela = document.querySelector('[data-tabela]');


const listaClientes = () => {

    const promise = new Promise ((resolve,reject) => {


                        // requisicao 
        const requisicao = new XMLHttpRequest();
        requisicao.open('GET','http://localhost:3000/profile');
        // requisicao 


        requisicao.onload = () =>{
            if (requisicao.response >= 400) {
                reject(JSON.parse(requisicao.response))
            } else {
                resolve(JSON.parse(requisicao.response))
            }

        };
        requisicao.send();  
    })

    return promise
} 

listaClientes()

.then(data => {

        data.forEach(element => {
            tabela.appendChild(criarNovalinha(element.nome, element.email))
    }); 

})


 

