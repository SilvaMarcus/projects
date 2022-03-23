
const semaforo = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
const trafficLight = (event) =>{
    turnOn[event.target.id]()
}

const turnOn = {
    'red': () => img.src = './imagens/red.png',
    'yellow': () => img.src = './imagens/yellow.png',
    'green': () => img.src = './imagens/green.png',
    'automatic': () => setInterval(changeColor, 1000) ,
     // setinterval chamando a funcao changeColor com argumento de tempo para troca 1000 nanosegundos.
}

// ======   fazendo o botao automatico para troca de cores automatica.

const changeColor = () =>{
    const colors = ['red', 'yellow','green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}
const nextIndex = () =>{

    if (colorIndex < 2 ){
        colorIndex++
    }else{
        colorIndex = 0;
    }
}



buttons.addEventListener('click', trafficLight);