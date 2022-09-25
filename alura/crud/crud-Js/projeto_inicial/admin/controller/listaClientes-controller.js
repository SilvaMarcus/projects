import { clienteService } from '../service/cliente_service.js';

     const montandoLinha = (nome, email) =>{

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
  };

  const tabela = document.querySelector('[data-tabela]'); 

  clienteService.listaClientes() 
  .then((data) =>{ 
    data.forEach(element => {
        tabela.appendChild(montandoLinha(element.nome, element.email))        
    });

  });
