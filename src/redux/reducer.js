const initialState = {
  items: [],
  detailedCocktail: {},
  category: '',
  isLoaded: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    case 'SET_COCKTAILS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case 'SET_DETAILED':
      return {
        ...state,
        detailedCocktail: action.payload,
        isLoaded: true,
      };

    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        items: state.items.map((item) => {
          const newItem = item.id === action.payload.id && {
            ...item,
            isFavorite: !item.isFavorite,
          };

          item.id === action.payload.id ? !item.isFavorite : null;

          return newItem || item;
        }),
        detailedCocktail: { ...state.detailedCocktail, isFavorite: !action.payload.isFavorite },
      };

    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default items;
