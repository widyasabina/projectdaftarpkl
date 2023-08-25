import {Sequelize} from "sequelize";

const db = new Sequelize('dbpkl', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;