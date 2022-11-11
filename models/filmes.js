const sql = require("./db");

const Filmes = function (Filme) {
    this.titulo = Filme.titulo;
    this.titulo_original = Filme.titulo_original;
    this.descricao = Filme.descricao;
    this.data_de_lancamento = Filme.data_de_lancamento;
    this.pontuacao = Filme.pontuacao;
}

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