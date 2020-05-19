'use-strict';

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/tampil').get(jsonku.tampilsemuadatamahasiswa);

    app.route('/tampil/:id').get(jsonku.tampildataberdasakanid);

    app.route('/tambah').post(jsonku.tambahMahasiswa);
}