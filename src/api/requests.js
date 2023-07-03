const API_KEY = "f9e5969b10ca53bfb47c26c8dcb28c04";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749,`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,

}

export default requests;