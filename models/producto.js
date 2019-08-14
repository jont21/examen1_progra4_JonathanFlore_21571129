const mongoose = require('mongoose');

let Schema = mongoose.Schema;

//Definir el esquema para el modelo Producto (Valor 5 puntos)

let Producto = new Schema({
    Nombre: {
        type: String,
        required:[true]
    },
    Precio: {
        type: Number,
        required:
        [true]
    },
    Creado_en: {
        type: Date,
        default: Date.now
    },

});
module.exports = mongoose.model('Producto', usuarioSchema)