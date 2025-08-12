const Movie = require('../models/Movie');

// @desc    Get trending movies
// @route   GET /api/movies/trending
// @access  Public
const getTrendingMovies = async (req, res) => {
  try {
    console.log('Searching for movies with isTrending: true');
    
    // First, let's see all movies in the collection
    const allMovies = await Movie.find({});
    console.log('Total movies in collection:', allMovies.length);
    console.log('Sample movie:', allMovies[0]);
    
    // Now search for trending movies
    const trendingMovies = await Movie.find({ isTrending: true })
      .select('title description genre year image');
    
    console.log('Trending movies found:', trendingMovies.length);

    res.status(200).json({
      success: true,
      count: trendingMovies.length,
      data: trendingMovies
    });
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  getTrendingMovies
}; 