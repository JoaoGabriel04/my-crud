require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/usuarios', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('API está rodando!');
});

app.post('/teste', (req, res) => {
  console.log('POST /teste:', req.body);
  res.json({ ok: true });
});


// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
})
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err);
});