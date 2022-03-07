function podeSubir(altura, acompanhada){
    if(altura >=1.40 && altura <= 2){ 
        return "ACESSO AUTORIZADO"

    }
     else if (altura <1.40 && altura >= 1.20 && acompanhada){
         return "ACESSO AUTORIZADO APENAS COM ACOMPANHANTE"

     }      
     else{
         return "ACESSO NEGADO"
     }

} console.log(podeSubir(1.39,true))