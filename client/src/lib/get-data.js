const { REACT_APP_SERVER_URL } = process.env;

//FILMS

export const getFilmData = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/film`);
  const data = await response.json();
  console.log({ data });
  return data;
};

export const getFilm = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/film/${id}`);
  const data = await response.json();
  console.log({ data });
  return data;
}


//ACTORS

export const getActorData = async () => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/actor`);
  const data = await response.json();
  console.log({ data });
  return data;
};

export const getActor = async (id) => {
  const response = await fetch(`${REACT_APP_SERVER_URL}/actor/${id}`);
  const data = await response.json();
  console.log({ data });
  return data;
}


