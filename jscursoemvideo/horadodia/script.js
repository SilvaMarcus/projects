


carregar = () =>{
    let msg = document.getElementById('msg');
    let foto = document.getElementById('imagem');
    var data = new Date ();
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `;
    if (hora >= 0 && hora <12){
        imagem.src = './imagens/manha.jpg';
        msg.innerHTML = `<p> BOM DIA! agora são ${hora} horas da Manha </p>`;
        document.body.style.background = 'rgb(253, 214, 126';

    } else if (hora >= 12 && hora < 18 ) {
        imagem.src = './imagens/tarde.jpg';
        msg.innerHTML = `<p> BOA TARDE! agora são ${hora} horas da Tarde </p>`;
        document.body.style.background = 'rgb(154, 78, 46)';

    } else {
        imagem.src = './imagens/noite.jpg';
        msg.innerHTML = `<p> BOA NOITE! <br>agora são ${hora} horas da Noite </p>`;
        document.body.style.background = 'rgb(49, 32, 56)';

    }

}   


