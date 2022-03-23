




const semaforo = document.getElementById('semaforo');
const buttons = document.getElementById('buttons');

const trafficLight = (event) => {
    turnOn[event.target.id]();


}
const turnOn = {
    'red': () => semaforo.src = './imagens/red.png',
    'yellow': () => semaforo.src = './imagens/yellow.png',
    'green': () => semaforo.src = './imagens/green.png',
}

buttons.addEventListener('click', trafficLight);