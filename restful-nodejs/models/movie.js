var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title: String,
    year: String,
    director: String
});

module.exports=mongoose.model('Movie', movieSchema);