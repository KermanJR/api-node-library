import livros from "../models/Livro.js";

class LivroController{

    static getLivros = (req, res)=>{
        livros.find()
            .populate('author')
            .exec((err, livros)=>{
            if(livros.length != 0){
                res.status(200).json(livros);
            }else{
                res.status(400).send('Nenhum livro encontrado na biblioteca.');
            }
        });
    }

    static postLivro = (req, res)=>{
        let livro = new livros(req.body);
        livro.save((err)=>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
            }else{
                res.status(201).json(livro);
            }
        })
    }

    static putLivroById = (req, res)=>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro atualizado com sucesso.'});
            }else{
                res.status(500).send({message: `${err.message} - falha na atualização do livro.`})
            }
        });
    }

    static getLivroById = (req, res)=>{
        const id = req.params.id;
        livros.findById(id)
            .populate('author', 'name')        
            .exec((err, livro)=>{
            if(!err){
                res.status(200).json(livro);
            }else{
                res.status(400).send({message: 'Livro não encontrado.'})
            }
        });
    }

    static deleteLivroById = (req, res)=>{
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err)=>{
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso.'});
            }else{
                res.status(500).send({message: err.message})
            }
        });
    }

    static getLivroByEditora = (req, res)=>{
        const editor = req.query.editora;
        livros.find({'editor': editor}, {},
            (err, livros)=>{
            res.status(200).send(livros);
        });
    }
}

export default LivroController;

