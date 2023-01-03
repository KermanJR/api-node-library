import mongoose, { Schema } from "mongoose";

const livroSchema = new Schema({
    id: {
            type: String
        },
    titulo: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors',
        required: true
    },
    editor:{
        type: String,
        required: true
    },
    numeroPaginas:{
        type: Number
    }
})

const livros = mongoose.model('livros', livroSchema);
export default livros;