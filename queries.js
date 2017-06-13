var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var pg = require('pg')

//var config = pgp({
const pool = new pg.Pool({
    host: 'duvetipn',
    port: duvetporten,
    database: 'duvetnamnetpådatabasen',
    user: 'duvetanvändarnamn',
    password: 'duvetpassword'
});

//var connectionString = 'postgres://34.250.0.67:5432/musicbrainz';
//var db = pgp(connectionString);
//var db = pgp(config);

// add query functions

module.exports = {
  getAllArtists: getAllArtists
};

function getAllArtists(req, res, next) {
  pool.query(`SELECT artist.name AS artistName, artist.gender AS artistGender, area.name AS areaName, artist.begin_date_year AS yearstart
    FROM artist, area 
    WHERE area.id = artist.area
    limit 50`)
    .then(function (data) {
      res.render('index', { rows: data.rows })
      /*res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL artists'
        });*/
    })
    .catch(function (err) {
      return next(err);
    });
}

/*
function getAllArtists(req, res, next) {
  pool.query('select * from artist limit 50')
    .then(function (data) {
      //res.render('index', { rows: data.rows })
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL artists'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}*/