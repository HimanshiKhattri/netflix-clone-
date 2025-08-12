const express = require('express');
const router = express.Router();
const { getTrendingMovies } = require('../controllers/movieController');

// GET /api/movies/trending
router.get('/trending', getTrendingMovies);

module.exports = router; 