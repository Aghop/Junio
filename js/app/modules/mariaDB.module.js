"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mariadb = require("mariadb");
var connection;
function connect() {
    connection = mariadb.createConnection({
        host: 'localhost',
        user: 'root',
        port: 3306,
        password: '',
        database: 'citasmedicas'
    });
    return connection;
}
exports.default = { connect: connect, connection: connection };
