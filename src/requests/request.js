const API_KEY = process.env.REACT_APP_API_KEY;

const requests = [
    {
        id: 2,
        name: "fetchNetflixOriginals",
        title: "Netflix Originals",
        apiEndpoint: `/discover/tv?api_key=${API_KEY}&with_network=123`,
        type: "movie_row",
        isLarge: true
    },
    {
        id: 1,
        name: "fetchTrending",
        title: "Trending Now",
        apiEndpoint: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 3,
        name: "fetchTopRated",
        title: "Top Rated",
        apiEndpoint: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 4,
        name: "fetchActionMovies",
        title: "Action Movies",
        apiEndpoint: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 5,
        name: "fetchComedyMovies",
        title: "Comedy",
        apiEndpoint: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 6,
        name: "fetchHorrorMovies",
        title: "Horror",
        apiEndpoint: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 7,
        name: "fetchRomanceMovies",
        title: "Romance",
        apiEndpoint: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 8,
        name: "fetchDocumentaries",
        title: "Romance",
        apiEndpoint: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        type: "movie_row",
        isLarge: false
    },
    {
        id: 9,
        name: "search",
        title: "",
        apiEndpoint: `/search/movie?api_key=${API_KEY}`,
        type: "search",
        isLarge: false
    }
]

export default requests;