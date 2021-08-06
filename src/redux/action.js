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

export const setDetailed = (item) => ({
  type: 'SET_DETAILED',
  payload: item,
});

export const toggleFavorite = (item) => ({
  type: 'TOGGLE_FAVORITE',
  payload: item,
});

export const setFavorites = (item) => (dispatch) => {
  axios.put(`https://610bb9122b6add0017cb3a45.mockapi.io/api/v1/cocktail/${item.id}`, {
    isFavorite: !item.isFavorite,
  });

  return dispatch(toggleFavorite(item));
};

export const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});
