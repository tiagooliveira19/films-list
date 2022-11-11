module.exports = app => {
    const filmes = require('../controllers/filmes.controller');

    // Busca todos os filmes
    app.get("/filmes", filmes.findAll);
}
