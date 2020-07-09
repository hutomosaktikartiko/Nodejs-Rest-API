var connnection = require('../connect');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../rest');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

//controller untuk regiester
exports.registrasi = function(req, res) {
    var post = {
        userName: req.body.userName,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    //cek email apakah sudah pernah di pakai untuk mendaftar
    var query = "SELECT email FROM ?? WHERE ??";
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connnection.query(query, function(error, rows) {
        if (error) {
            console.log(error);
        } else {
            if(rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connnection.query(query, post, function(error, rows) {
                    if(error) {
                        console.log(error);
                    } else {
                        response.ok("Bershasil menambahkan data user baru", res);
                    }
                });
            } else {
                response.ok("Email sudah terdaftar!");
            }
        }
    })
}