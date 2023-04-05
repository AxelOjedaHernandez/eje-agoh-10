//servidor en node js y express
const express = require('express');
const app = express();
const port = process.env.port || 3000;

//configuraciones - respuestas para el cliente(chrome, explore)
app.use(express.static('public'));

app.get("/",(request, response)=>{
    response.send('index.html');
});

app.get('*',(req,res)=>{
    res.send('404 ERROR | Pagina no encontrada');
});

//procesos - respuestas para el desarrollador
app.listen(port,()=>{
    console.log('servidor corriendo en el puerto: ', port);
});