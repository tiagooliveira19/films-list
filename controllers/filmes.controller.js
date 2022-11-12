const Filmes = require('../models/filmes');

// Cria e Salva um novo filme
exports.create = (req, res) => {
    // Valida a requisição
    if (!req.body) {
        res.status(400).send({
            message: "Os dados não podem ser vazios!"
        });
    }

    // Cria um novo filme
    const filme = new Filmes({
        titulo: req.body.titulo,
        titulo_original: req.body.titulo_original,
        descricao: req.body.descricao,
        data_de_lancamento: req.body.data_de_lancamento,
        pontuacao: req.body.pontuacao
    });

    /*const filme = new Filmes({
        titulo: req.body.title,
        titulo_original: req.body.original_title,
        descricao: req.body.description,
        data_de_lancamento: req.body.release_date,
        pontuacao: req.body.rt_score
    });*/

    // Salva filme criado no banco
    Filmes.create(filme, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a criação do usuario!"
            });
        else res.send(data);
    });
};

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
