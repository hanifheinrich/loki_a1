const express = require ('express')
const router  = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/', controller.dosen.listmatkul)
router.get('/detail-:id', controller.dosen.detailmatkul)

router.get('/detail-:id/edit', controller.dosen.editRPS)

module.exports = router