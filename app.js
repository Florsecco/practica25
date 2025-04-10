const express = require('express');
const app = express();
const path =require('path');

const publicPath = path.resolve(__dirname, './public')

app.use( express.static(publicPath))

app.listen(3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
})

app.get('/', function(req,res){
    const htmlPath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlPath)
})
app.get('/contact', function(req,res){
    const htmlPath = path.resolve(__dirname, './views/contact.html')
    res.sendFile(htmlPath)
})
app.get('/quienessomos', function(req,res){
    const htmlPath = path.resolve(__dirname, './views/quienessomos.html')
    res.sendFile(htmlPath)
})