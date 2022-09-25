'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: 'Marcus',
    email: 'Nery@icloud.com',
    celular: '(11)9597-9595',
    cidade: 'Sao Paulo'
}

// CRUD - Create Read Update Delete

const createClient = (client) => {
     localStorage.setItem('db_client', JSON.stringify(client))
}


// eventos    
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)