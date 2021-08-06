import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchCocktails =
  (id = '', category = '') =>
  async (dispatch) => {
    dispatch(setLoaded(false));

    let api = `https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${
      id || '?' + category + '=true'
    }`;

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
});

export const toggleFavorite = (items) => ({
  type: 'TOGGLE_FAVORITE',
  payload: items,
});

export const toggleFavorites = (items) => (dispatch) => {
  axios.put(`https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${items.id}`, {
    isFavorite: !items.isFavorite,
  });

  return dispatch(toggleFavorite(items));
};

export const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});
