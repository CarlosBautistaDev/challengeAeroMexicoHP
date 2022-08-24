
export const charactersReducer = (state = { characters: [] }, { type, payload }) => {
  switch (type) {
    case  '[Characters] get all request':
      return {
        loading: true,
      };

    case '[Characters] get all success':
      return {
        loading: false,
        characters: payload,
      };

    case '[Characters] filter studends request':
      return {
        loading: true,
      };

    case '[Characters] filter studends success':
      return {
        loading: false,
        activeStudents: true,
        characters: payload,
      };

    case '[Characters] filter staff request':
      return {
        loading: true,
      };

    case '[Characters] filter staff success':
      return {
        loading: false,
        activeStaff: true,
        characters: payload,
      };

    case '[Characters] add new request':
      return {
        loading: true,
      };

    case '[Characters] add new success':
      return {
        loading: false,
        characters: payload,
      };

    default:
      return state;
  }
};
