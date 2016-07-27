var express = require('express');
var router = express.Router();

var movieLogic = require("../logic/movieLogic");

router.route('/movies')
    .get(movieLogic.getMovies)
    .post(movieLogic.addMovie);

router.route('/movies/:id')
    .put(movieLogic.updateMovie)
    .get(movieLogic.getMovieById)
    .delete(movieLogic.deleteMovieById);

module.exports = router;