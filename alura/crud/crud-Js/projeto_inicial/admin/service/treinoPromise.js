
montandoLinha = (nome, email) =>{

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
  }

  const tabela = document.querySelector('[data-tabela]'); 

  const listaClientes = () => {

     const promise = new Promise((resolve, reject) => {

          const requisicao = new XMLHttpRequest();
          requisicao.open('GET', 'http://localhost:3000/profile');
          requisicao.send();
     
               requisicao.onload = () => {
                    if(requisicao.status >=400){
                         reject(JSON.parse(requisicao.response))
                    } else{
                         resolve(JSON.parse(requisicao.response))
                    }
     
               }
     
       })
         
    return promise
  }

listaClientes()
.then((data) => {
     tabela.appendChild(montandoLinha(data[0].nome , data[0].email))
})

