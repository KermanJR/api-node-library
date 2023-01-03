import authors from "../models/Author.js";

class AuthorController{

    static getAuthors = (req, res)=>{
        authors.find((err, authors)=>{
            if(authors.length != 0){
                res.status(200).json(authors);
            }else{
                res.status(400).send('Nenhum author encontrado.');
            }
        });
    }

    static postAuthor = (req, res)=>{
        let author = new authors(req.body);
        author.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar author.`})
            }else{
                res.status(201).json(author);
            }
        })
    }

    static putAuthorById = (req, res)=>{
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Author atualizado com sucesso.'});
            }else{
                res.status(500).send({message: `${err.message} - falha na atualização do author.`})
            }
        });
    }

    static getAuthorById = (req, res)=>{
        const id = req.params.id;
        authors.findById(id, (err, author)=>{
            if(!err){
                res.status(200).json(author);
            }else{
                res.status(400).send({message: 'Author não encontrado.'})
            }
        });
    }

    static deleteAuthorById = (req, res)=>{
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Author removido com sucesso.'});
            }else{
                res.status(500).send({message: err.message})
            }
        });
    }
}

export default AuthorController;

