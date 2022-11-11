const Filmes = require('../models/filmes');

// Busca todos os filmes
exports.findAll = (req, res) => {
    Filmes.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a busca dos filmes!"
            });
        else res.send(data);
    });
};
