const API_KEY = process.env.API_KEY;

const apimovie = [
  (movie = {
    source: '/api/movies',
    destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  }),
];

module.exports = apimovie;
