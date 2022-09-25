// =========================  PROMISES ======================== // 

// Promises são como promessas da vida real. ela esta esperando algum retorno ;
// Para criar uma promessa instanciamos a classe Promise;
// Que leva dois argumentos, *resolve* (solucao), e reject (erro);
// Para encadear mais processos ultilizamos o metodo then;
// Alguns recursos de JS (Fetch API) e bibliotecas retornam Promises;


const myPromise = new Promise ( (resolve, reject) =>{
    
     const nome = 'Nery';

     if(nome === 'Nery'){
          resolve (' Usuario Encontrado !! promise 1  ')
     } else {
          reject ('nome não encontrado promise 1 :(')
     }

});

// o Argumento de .then(o que eu espero da promise)  significa a resposta que esta dentro da promise, a promise guarda um resolve ou um reject. e o then vai retornar isso p gente. 

myPromise.then((data) => {
    console.log(data) // data é resposta do resolve ou do reject 
})



//============== encadeamento de then's ===========
// lidando com o resolve

const myPromise2 = new Promise ( (resolve, reject) =>{
    
     const nome = 'Nery';

     if(nome === 'Nery'){
          resolve (' Usuario Encontrado promise 2 !! ')
     } else {
          reject ('nome não encontrado promise 2 :(')
     }

}); 
myPromise2.then((data) => {
     return data.toUpperCase()
}).then((dataModificada) => {
     console.log(dataModificada)
})




// ============== Retorno do catch ======= 
// lidando com o reject

const myPromise3 = new Promise ((resolve, reject) => {
     const nome = 'Joao';
     if(nome === 'Nery'){
          resolve ('Usuario encontrado promise3 ')
     } else {
          reject ('NÃO ENCONTRADO promise 3')
     }
}) 

myPromise3.then((data) => {
     console.log(data)
}).catch((erro) => {
     console.log(' aconteceu um Erro: ' + erro)
})


// =============== Resolver varias promessas com all ===============


const p1 = new Promise((resolve, reject ) => {
    setTimeout(() => {
     resolve(' p1 ok  timeout')
    }, 3000)
})


const p2 = new Promise((resolve, reject) => {
     resolve('p2 ok ');
});


const p3 = new Promise((resolve, reject) => {
     resolve('p3 ok ');
});


// monstamos um array com as promises
// montanos o .then com o array de promises...
// retorna p gente um array com as respostas,

const resolveALl = Promise.all([p1,p2,p3]).then((data) => {
     console.log(data)
})

// =============== Resolver varias promessas com race ===============
// metodo race, executa a promise que for mais rapida, a que ganhar a corrida


const p4 = new Promise((resolve, reject ) => {
     setTimeout(() => {
      resolve(' p4 ok  timeout')
     }, 3000)
 })
 
 
 // a promessa 5 vai ganhar, pois a p4 esta com timeout de 2 segundos,
 const p5 = new Promise((resolve, reject) => {
      resolve('p5 ok '); // vai ganhar a corrida 
 });
 
 // embora a promessa6 seja igual a p5, a p5 vem primeiro por isso ela ganha a corrida. 
 const p6 = new Promise((resolve, reject) => {
      resolve('p6 ok ');
 });

 
const resolveAllrace = Promise.race([p4,p5,p6]).then((data) => {
     console.log(data)
})


// ============== feth request na API do github
//Fetch API 



const username = 'silvamarcus';

fetch(`https://api.github.com/users/${username}`, {
     method:'GET',
     headers: {
          Accept:'application/vnd.github.v3+json',
     },
}).then((response) =>{

     return response.json()
    
}).then((data) => {
     console.log(data)
   console.log(` o nome do usuario é ${data.name}`)
}).catch((erro) => {   // erro do reject 
     console.log('houve algum erro' + erro)
});