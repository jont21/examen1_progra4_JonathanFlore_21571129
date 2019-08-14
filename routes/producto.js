const express = require('express');

const Producto = require('../models/producto');

const app = express();

app.get('/', (_req, res) => {
    res.json('Examen 1 Programación 4');
});

// Deberá hacer aquí el método get para producto (Valor 5 puntos)
app.get('./', (_req, res) => {
    res.json(Nombre, 'Jonathan')
    res.json(Producto, 10)
    res.json(Creado_en, 'Fecha')
});



// Deberá hacer aquí el método post para producto (Valor 5 puntos)
app.post('./', (_req, res) => {
    res.json({ Nombre })
    res.json({ Producto })
    res.json({ Creado_en })
});