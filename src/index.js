operacionesbasicas = require('./operacionesbasicas.json')

module.exports={
    suma(a=Number,b=Number){
        return new Promise(async function(resolve, reject) { 
            c= a+b
            resolve(c)
        })
    },
    resta(a=Number,b=Number){
        return new Promise(async function(resolve, reject) { 
            c= a-b
            resolve(c)
        })
    }
    
}