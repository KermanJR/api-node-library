import express from 'express'
import LivroController from '../controllers/livrosController.js';

const router = express.Router();

router.get('/livros', LivroController.getLivros);
router.get('/livros/busca', LivroController.getLivroByEditora);
router.get('/livros/:id', LivroController.getLivroById);
router.post('/livros', LivroController.postLivro);
router.put('/livros/:id', LivroController.putLivroById);
router.delete('/livros/:id', LivroController.deleteLivroById);


export default router;