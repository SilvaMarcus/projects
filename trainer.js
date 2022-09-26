






     function quantoCarrega (quantidade, adicionar) {
     
          let limite = 25                 

          let tanque = quantidade + adicionar 
          
          return  ( adicionar ) - (tanque - limite) 

   }

console.log(quantoCarrega(20,2))