const indexcontrollers = {}

const users = require('./users')
indexcontrollers.users = users

const dosen = require('./controllerDosen')
indexcontrollers.dosen = dosen

const admin = require('./controllerAdmin')
indexcontrollers.admin = admin

const mahasiswa = require('./controllerMahasiswa')
indexcontrollers.mahasiswa = mahasiswa

module.exports = indexcontrollers;