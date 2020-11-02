export const getFilmData = async () => {
  const response = await fetch('/forecast');
  const data = await response.json();
  return data;
}