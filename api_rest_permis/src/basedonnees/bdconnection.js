const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bdPermis'
  });

module.exports ={ connection };