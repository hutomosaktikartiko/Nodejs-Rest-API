'use-strict';

var response = require('./rest');
var connection = require('./connect');

exports.index = function(req, res) {
    response.ok('REST API Started')
}