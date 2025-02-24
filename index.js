//creando un servidor con express
//Extraer el paquete 
//const express = require('express');
import express from 'express';

//importacion de dependencias
import usuarioRoutes from './routes/usuarioRoutes.js';

//crear la app
const app = express();

//Routing
app.use('/', usuarioRoutes);

//definir el puerto y arrancar el proyecto
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor seleccionado esta en el puerto: ${port}`);
});