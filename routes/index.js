var express = require('express');
var router = express.Router();
const DB = require('../controllers/db.controller')
var wrap = require('co-express');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/get-all', wrap(DB.getAll));

router.post('/api/v1/save-data',wrap(DB.save));
module.exports = router;
