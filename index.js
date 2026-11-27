require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const conexion = require('./db');


app.listen(
    PORT, 
    () => console.log(`funciona en http://localhost:${PORT}`)
);


app.get('/api/usuarios', async (req,res) => {
    try {
        const [filas] = await conexion.query('SELECT * FROM usuarios');
        res.json(filas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los datos', error: error.message});
    }
})