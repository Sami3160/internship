// src/store/moviesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    popular: [],
    topRated: [],
    upcoming: [],
    searchResults: [],
  },
  reducers: {
    setPopularMovies(state, action) {
      state.popular = action.payload;
    },
    setTopRatedMovies(state, action) {
      state.topRated = action.payload;
    },
    setUpcomingMovies(state, action) {
      state.upcoming = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { setPopularMovies, setTopRatedMovies, setUpcomingMovies, setSearchResults } = moviesSlice.actions;
export default moviesSlice.reducer;
