const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  isTrending: { type: Boolean, default: false },
  description: { type: String, required: true },
  image: { type: String, required: true }
  
});

module.exports = mongoose.model('Movie', movieSchema, 'trendingMovies'); 