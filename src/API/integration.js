
const accountId = 21338470

export const API_ENDPOINTS = {
    topRatedMovies : '/top-rated',
    popularMovies: '/popular',
    currentWatchingMovies: '/now_playing',
    trendingMovies: '/trending',
    upcoming: '/upcoming',
    getMovieDetailById: (id) => `/movie/${id}`,
    getRecomendationMovie: (id) => `/movie/${id}/recommendations`,
    addFavoriteMovie:  `/account/${accountId}/favorite`,
    addWatchlistMovie:  `/account/${accountId}/watchlist`
  }