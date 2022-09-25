
// requisicao 
const requisicao = new XMLHttpRequest();
requisicao.open('GET','http://localhost:3000/profile');
requisicao.send();
// requisicao 

requisicao.onload = () =>{
   
        const data_requisicao = JSON.parse(requisicao.response);

       data_requisicao.forEach(element => {
            tabela.appendChild(criarNovalinha(element.nome, element.email))
       });

    };

    const tabela = document.querySelector('[data-tabela]'); 

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
 







