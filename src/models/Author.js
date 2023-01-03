import mongoose, { Schema } from "mongoose";


const authorSchema = new Schema(
    {
        id: {
            type: String
        },
        name: {
            type: String, 
            required: true
        },
        nationality: {
            type: String, 
            required: true
        }
    },
    {
        versionKey: false
    }
)

const authors = mongoose.model('authors', authorSchema);
export default authors;