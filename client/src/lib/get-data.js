const { REACT_APP_SERVER_URL } = process.env;

export const getFilmData = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/film`);
  const data = await response.json();
  console.log({ data });
  return data;
};
