var mysql = require('mysql');

//buat connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restapinode'
});

conn.connect((err) => {
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;