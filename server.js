import { config } from 'dotenv';

config()
const PORT = process.env.PORT || 3000;
import app from './src/app.js'


app.listen(PORT, (req, res)=>{
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})