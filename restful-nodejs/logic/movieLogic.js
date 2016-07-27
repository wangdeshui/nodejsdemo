var Movie = require('../models/movie');

var movieLogic = {
    getMovies: (req, res) => {
        Movie.find().exec()
            .then((movies) => { res.json(movies) })
            .catch((err) => { res.send(err) });
    },

    addMovie: (req, res) => {
        var movie = new Movie(req.body);
        movie.save().then(res.send({ message: 'Movie Added' }))
            .catch((err) => { res.send(err) });
    },

    updateMovie: (req, res) => {
        Movie.findOne({ _id: req.params.id }).exec()
            .then((movie) => {
                for (prop in req.body) {
                    movie[prop] = req.body[prop];
                }
                movie.save()
                    .then(res.json({ message: 'Movie updated!' }))
                    .catch((err) => res.send(err))
            })
    },

    getMovieById: (req, res) => {
        Movie.findOne({ _id: req.params.id }).exec()
            .then((movie)=>res.json(movie))
            .catch((err) => { res.send(err) })
    },

    deleteMovieById: (req, res) => {
        Movie.remove({ _id: req.params.id })
            .then(res.json({ message: 'Successfully deleted' }))
            .catch((err) => res.send(err))
    }
};

module.exports = movieLogic;