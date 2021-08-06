import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCocktails =
  (id = '') =>
  async (dispatch) => {
    dispatch(setLoaded(false));

    let api = `https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${id}`;

    const response = await axios.get(api);
    const data = await response.data;
    id ? dispatch(setDetailed(data)) : dispatch(setCocktails(data));
  };

export const setCocktails = (items) => ({
  type: 'SET_COCKTAILS',
  payload: items,
});

export const setDetailed = (items) => ({
  type: 'SET_DETAILED',
  payload: items,
});

export const setFavorite = (items) => ({
  type: 'SET_FAVORITE',
  payload: items,
  // payload: (items.isFavorite = !items.isFavorite),
});

export const toggleFavorite = (items) => ({
  type: 'TOGGLE_FAVORITE',
  payload: items,
});
