check = () =>{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var verificar = document.getElementById('verificar');  
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os Dados e Tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 10 ){
                img.setAttribute('src','babyboy.jpg')
            } else if (idade < 21){
                img.setAttribute('src','youngman.jpg')
            }else if (idade < 50){
                img.setAttribute('src','adultman.jpg')
            }else{
                  img.setAttribute('src','oldman.jpg')
            }

        } else if 
            (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade < 10 ){
                    img.setAttribute('src','babygirl.jpg')
                } else if (idade < 21){
                    img.setAttribute('src','youngwoman.jpg')
                }else if (idade < 50){
                    img.setAttribute('src','adultwoman.jpg')
                }else{
                      img.setAttribute('src','oldwoman.jpg')
                }    
            
            }
            res.style.textAlign ='center'
            res .innerHTML = `Detectamos ${genero} com ${idade} anos `
            res.appendChild(img)

    }

}
verificar.addEventListener('click', check)


