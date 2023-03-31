const express = require('express');
const { dirname } = require('path');

const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname +'/index.html'));
});


app.get('/Agregar', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/Agregar.html'));
});

app.get('/Datos.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Datos.js'));
});

app.get('/Buscar.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Buscar.js'));
});

app.get('/Subir.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Subir.js'));
});

app.get('/Lista', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Public/Lista.html'));
});
app.get('/Funciones.js', (req, res)=>{
    res.sendFile(path.join(__dirname +'/Js/Funciones.js'));

})

app.listen(3000, ()=>{
    console.log('working', 3000)
});
