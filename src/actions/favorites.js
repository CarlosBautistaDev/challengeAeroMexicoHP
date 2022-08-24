
export const addNewFavorite = (name) => async (dispatch, getState) => {
  dispatch({ type: '[Favorites] request' });

  const { characters } = getState().characters;
  const { favorites } = getState().favorites;

  const exist = favorites.filter((char) => char.name === name);
  if (exist.length > 0) return dispatch({ type: '[Favorites] delete', payload: name });;

  const favorite = characters.filter((char) => char.name === name);
  dispatch({ type: '[Favorites] success', payload: favorite });
};

export const deleteFavorite = (name) => async (dispatch, getState) => {
  dispatch({ type: '[Favorites] delete', payload: name });
};
