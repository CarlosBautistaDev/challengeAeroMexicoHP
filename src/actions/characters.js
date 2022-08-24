import axios from 'axios';

const baseUrl = 'http://localhost:4000';

export const getAllCharacters = () => async (dispatch) => {
  dispatch({ type: "[Characters] get all request" });
  const { data } = await axios.get(`${baseUrl}/character`);

  dispatch({ type: '[Characters] get all success', payload: data });
};

export const filterStudents = () => async (dispatch) => {
  dispatch({ type: '[Characters] filter studends request' });
  const { data } = await axios(`${baseUrl}/character`);
  const students = data.filter((char) => char.hogwartsStudent);

  dispatch({ type: '[Characters] filter studends success', payload: students });
};

export const filterStaff = () => async (dispatch) => {
  dispatch({ type: '[Characters] filter staff request' });
  const { data } = await axios(`${baseUrl}/character`);
  const staff = data.filter((char) => char.hogwartsStaff);

  dispatch({ type: '[Characters] filter staff success', payload: staff });
};

export const addNewCharacter = (char) => async (dispatch) => {
  dispatch({ type: '[Characters] add new request', payload: char });

  await axios
    .post(`${baseUrl}/character`, {
      id: new Date().getTime(),
      alive: true,
      ...char,
    })
    .then((response) => {});

  const { data } = await axios.get(`${baseUrl}/character`);
  dispatch({ type: '[Characters] add new success', payload: data });
};
