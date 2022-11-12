module.exports = app => {

    const filmes = require('../controllers/filmes.controller');

    var router = require("express").Router();

    // Cria um novo filme
    // app.post("/filme", filmes.create);
    router.post("/add", filmes.create);

    // Busca todos os filmes
    // app.get("/filmes", filmes.findAll);
    router.get("/", filmes.findAll);

    app.use('/api/filmes', router);
}
