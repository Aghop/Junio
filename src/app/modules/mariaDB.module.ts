import mariadb = require('mariadb');

let connection
    function connect(): Promise<mariadb.Connection>{

        connection = mariadb.createConnection({
            host: 'localhost',
            user: 'root',
            port: 3306,
            password: '',
            database: 'citasmedicas'
        });
        return connection;
    }
    

export default { connect , connection}