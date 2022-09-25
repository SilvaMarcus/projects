
const table = document.querySelector('[data-tabela]'); // aqui estamos capturando a a tabela para adicionar conteudo dentro dela.

const createNewLine = (name, email) => {
const lineNewClient = document.createElement('tr'); // tag a ser criada <tr> uma linha 
        
// em conteudo contem a estrutura html que sera adicionada, ela contem o <td> que sera adicionado em <tr> 
const content = `<td class="td" data-td>${name}</td> 
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
                        </td>  ` 

lineNewClient.innerHTML = content;  // estamos adicionando o conteudo dentro da <tr> que esta em linhaNovoCliente comn o innerHTML 

  return lineNewClient; // necessario pois é uma funcao entao precisa retornar algo, ele retornará o que foi pedido na linha 20
};






// ---------------  REQUISIÇÃO COM BANCO DE DADOS ------------------// 
const http = new XMLHttpRequest(); // metodo que faz a requisicao 

http.open('GET','http://localhost:3000/profile'); // abre a comunicação entre a aplicação e a api 
// o Metodo open(1,2) recebe dois argumentos, 1* o que vou pedir para o servidor nesse caso o (GET). 
// 0 2* o endereco que vou enviar a requisição que no caso é  o'http://localhost:3000/profile'...
http.send();
// Metodo send() serve para enviar a requisicao ele acompanha o metodo open()
// ---------------  REQUISIÇÃO COM BANCO DE DADOS ------------------// 
http.onload = ()=> { 
 // Metodo onload, significa que algo acontecera ao carregar a pagina. Foi criado uma funcao anonima, que ao carregar a pagina ela executa algo... 

 // o que vai acontecer ao recarregar a seguir ... >>> 

  const data = JSON.parse(http.response); 
// a const data guarda a resposta da requisicao convertida para objeto JS com metodo JSON.parse(http.response)

    data.forEach(element => { // para cada elemento em data 

    table.appendChild(createNewLine(element.nome, element.email)) 
    // a tabela vai receber a funcao creatnewLine(nome,email) que recebe dois parametros. 
    // o dado da requisicao esta sendo capturado com o forEach que é um metodo de array, element.nome vai retornar o conteudo e assim sera usado no parametro para assim ser construido o creatNewLine. e sera exibido     
    });
};


/* PRIMEIRO, NA PASTA ADMIN NO TERMINAL USAMOS O COMANDO -  NPM INSTALL E EM SEGUIDA O npx json-server --watch db.json   */

