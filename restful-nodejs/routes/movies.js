var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

router.route('/movies')
    .get((req, res) => {
        Movie.find((err, movies) => {
            if (err) {
                return res.send(err)
            };
            res.json(movies);
        });
    })
    .post((req, res) => {
        var movie = new Movie(req.body);
        console.log(req.body);
        movie.save((err) => {
            if (err) {
                return res.send(err);
            }
            res.send({ message: 'Movie Added' });
        });
    });


router.route('/movies/:id')
    .put((req, res) => {
        Movie.findOne({ _id: req.params.id }, (err, movie) => {
            if (err) {
                return res.send(err);
            }

            for (prop in req.body) {
                movie[prop] = req.body[prop];
            }

            // save the movie
            movie.save((err) => {
                if (err) {
                    return res.send(err);
                }

                res.json({ message: 'Movie updated!' });
            });
        });
    })
    .get((req, res) => {
        Movie.findOne({ _id: req.params.id }, function(err, movie) {
            if (err) {
                return res.send(err);
            }

            res.json(movie);
        });
    })
    .delete((req, res) => {
        Movie.remove({
            _id: req.params.id
        }, (err, movie) => {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Successfully deleted' });
        });
    });


module.exports = router;