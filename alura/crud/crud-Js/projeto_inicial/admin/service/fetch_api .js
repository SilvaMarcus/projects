
montandoLinha = (nome, email) =>{ //=======funcao contruindo estrutura=====

     const novaLinhatr = document.createElement('tr');
       const estrutura_html =  `<td class="td" data-td>${nome}</td> 
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
               </td>`
  
  novaLinhatr.innerHTML = estrutura_html;
  
  return novaLinhatr
  }//==========funcao contruindo estrutura=============

  
  const tabela = document.querySelector('[data-tabela]'); 
//==========tabela elemento pai para adicionar a linha ========



// ====funcao que retorna dados de uma requisicao fetchAPI a requisicao FETCHAPI ja nos retornar uma Promise 
// =====uma vez que temos uma promise, esta disponivel o metodo .then((data) = >{})  (entao.. )
  const listaClientes = () => {
     return fetch(`http://localhost:3000/profile`)
     .then((data) => {
          return data.json()
     })
   
  } //====== esta nos retornando um objeto convertido em json.

listaClientes()
.then((data) => {// como chamamos a funcao que retorna a promise listaclientes(), podemos usar o metodo .then para fazer o que for necessario com o dado da promise.
     tabela.appendChild(montandoLinha(data[0].nome , data[0].email))
}) 

// tabela.append.... este codigo esta adicionando no appendchild de  tabela a funcao que cria uma estrutura html e esta usando os dados retornados da fetchapi/promise e convertidos em json(), estamos usando esses dados para montar a estrutura referenciando  ${nome} e ${email} na estrutura html da linha 5 .   





