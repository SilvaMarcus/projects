/* Escreva uma função decisaoComMoeda, que pegue três parâmetros e devolva o segundo se o primeiro é "cara", ou o terceiro, se for "coroa". Por exemplo:

 decisaoComMoeda ("cara", "coxinha", "empadinha")
"coxinha" */
function decisaoComMoeda (cara,coxinha,empadinha){
    if( cara === 'cara' ){
        return coxinha
    }
    else if (cara === 'coroa') {
        return empadinha
    }
}  console.log(decisaoComMoeda('cara','churrasco','strogonof'))