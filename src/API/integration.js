
const accountId = 21338470

export const API_ENDPOINTS = {
    topRatedMovies : '/movies/top-rated',
    popularMovies: '/movies/popular',
    currentWatchingMovies: '/movies/now_playing',
    trendingMovies: '/movies/trending',
    upcoming: '/movies/upcoming',
    getMovieDetailById: (id) => `/movie/${id}`,
    getRecomendationMovie: (id) => `/movie/${id}/recommendations`,
    addFavoriteMovie:  `/account/${accountId}/favorite`,
    addWatchlistMovie:  `/account/${accountId}/watchlist`
  }