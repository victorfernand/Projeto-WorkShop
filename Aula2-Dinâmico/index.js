const express = require ('express') //importando o express
const app = express()
// parte dinâmica
let i = 0 

app.get('/', (req, res)=>{
    i = i + 1
    res.send('<h1>Olá Power Sites!' + i + '</h1>')
})

app.listen(3000, ()=>{  /// abrindo uma porta, para rodar o app.
    console.log('Servidor Rodando..')
})