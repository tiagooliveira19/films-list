module.exports = app => {

    const filmes = require('../controllers/filmes.controller');

    var router = require("express").Router();

    // Cria um novo filme
    router.post("/add", filmes.create);

    // Busca todos os filmes
    router.get("/", filmes.findAll);

    app.use('/api/filmes', router);
}
