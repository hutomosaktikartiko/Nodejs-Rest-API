'use-strict';

var response = require('./rest');
var connection = require('./connect');

exports.index = function(req, res) {
    response.ok('REST API Started', res)
}

//manmpilkan semua data mahasiswa
exports.tampilsemuadatamahasiswa = function(req, res) {
        connection.query('SELECT * FROM mahasiswa', function(error, rows, fields) {
            if(error) {
                connection.log(error);
            } else {
                response.ok(rows, res)
            }
        });
}

//menampilkan data mahasiswa berdasarkan id
exports.tampildataberdasakanid = function(req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mahasiswa = ?', [id], function(error, rows, fields) {
        if(error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
}