let mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    titulo: String,
    resumo: String,
    escrito_por: String,
    genero: String,
    isbn: String,
    capa: String,
})

module.exports = mongoose.model('Book', bookSchema)