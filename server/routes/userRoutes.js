const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Criar usuário
router.post('/', async (req, res) => {
  console.log("Recebi este corpo:", req.body);
  try {
    const { name, email } = req.body;
    const novoUsuario = new User({ name, email });
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: err.message });
  }
});

// Listar todos
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});

// Atualizar usuário
router.put('/:id', async (req, res) => {
  try {
    const usuarioAtualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao atualizar usuário' });
  }
});

// Deletar usuário
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Usuário deletado com sucesso!' });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao deletar usuário' });
  }
});

module.exports = router;