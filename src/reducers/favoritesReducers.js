
export const favoritesReducer = (state = { favorites: [] }, { type, payload }) => {
  switch (type) {
    case '[Favorites] request':
      return {
        favorites: [...state.favorites],
        loading: true,
      };

    case '[Favorites] success':
      return {
        loading: false,
        favorites: [...payload, ...state.favorites].slice(0, 5),
      };

    case '[Favorites] delete':
      return {
        favorites: state.favorites.filter((fav) => fav.name !== payload),
      };

    default:
      return state;
  }
};
