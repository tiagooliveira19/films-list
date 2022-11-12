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
