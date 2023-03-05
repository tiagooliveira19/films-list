const db = require('../models');
const Filmes = db.filmes;

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: filmes } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, filmes, totalPages, currentPage };
};

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
        genero: req.body.genero,
        descricao: req.body.descricao,
        data_de_lancamento: req.body.data_de_lancamento,
        pontuacao: req.body.pontuacao
    });

    // Salva filme criado no banco
    Filmes.create(filme.dataValues, (err, data) => {
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

    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    // Filmes.findAndCountAll({ order: [['titulo', 'ASC']], limit, offset })
    Filmes.findAndCountAll({ limit, offset })
        .then(data => {
            const response = getPagingData(data, page, limit);
            res.send(response);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a busca dos filmes!"
            });
        });
};
