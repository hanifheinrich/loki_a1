const { Sequelize } = require('sequelize');
const dbconfig = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    dbconfig.authenticate();
    console.log('Koneksi Berhasil : ');   //tes koneksi
} catch (error) {
    console.error('Koneksi Tidak Berhasil : ', error);
}

module.exports = dbconfig;