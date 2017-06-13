var express = require('express');
var router = express.Router();

var db = require('../queries');


router.get('/api/artists', db.getAllArtists);

module.exports = router;
