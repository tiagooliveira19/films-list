module.exports = app => {
    const filmes = require('../controllers/filmes.controller');

    // Cria um novo filme
    app.post("/filme", filmes.create);

    // Busca todos os filmes
    app.get("/filmes", filmes.findAll);
}
