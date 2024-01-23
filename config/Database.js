import { Sequelize } from 'sequelize';
import'../mysql2/index.js';

const db = new Sequelize('db_penggajian3', 'root', '', {
    host: "127.0.0.1", // Use IPv4 localhost
    port:3306,
    dialect: "mysql",
    dialectOptions: {
        options: {
            encrypt: false
        }
    }
});

export default db;