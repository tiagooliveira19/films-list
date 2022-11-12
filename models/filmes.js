module.exports = (sequelize, Sequelize) => {

    return sequelize.define("filmes", {
        titulo: {
            type: Sequelize.STRING
        },
        titulo_original: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        data_de_lancamento: {
            type: Sequelize.STRING
        },
        pontuacao: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: "DATETIME",
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: "DATETIME",
            allowNull: true
        }
    });
};


/*
const sql = require("./db");

const Filmes = function (Filme) {
    this.titulo = Filme.titulo;
    this.titulo_original = Filme.titulo_original;
    this.descricao = Filme.descricao;
    this.data_de_lancamento = Filme.data_de_lancamento;
    this.pontuacao = Filme.pontuacao;
}

Filmes.create = (newFilm, result) => {
    sql.query("INSERT INTO filmes SET ?", newFilm, (err, res) => {

        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Filme criado: ", {id: res.insertId, ...newFilm});
        result(null, {id: res.insertId, ...newFilm});
    });
};

Filmes.getAll = result => {
    sql.query("SELECT * FROM filmes", (err, res) => {

        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Filmes: ", res);
        result(null, res);
    });
};

module.exports = Filmes;
*/
