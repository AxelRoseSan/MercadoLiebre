const express = require('express');
const app = express ();
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
/* app.use('../public', express.static(path.join(__dirname, 'public'))) */
app.use(express.static(publicPath)); // uso de archivos estáticos
const port = process.env.PORT || 3000
app.listen ( port, () => {
    console.log ('Hola pepe')
});

app.get ('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get ('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});