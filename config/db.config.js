module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "projeto",
    dialect: "mysql",
    pool: {
        max: 50,
        min: 25,
        acquire: 30000,
        idle: 10000
    }
};
