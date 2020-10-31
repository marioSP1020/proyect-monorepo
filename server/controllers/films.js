import {
  getAllFilms,
  getFilmResourceById,
  createFilmResource,
  updateFilmResource,
  deleteFilmResource
} from '../models/films.js';

//FROM THE URL GET /FILM
export const listFilms = async (request, response, next) => {

  try {
    const allFilms = await getAllFilms();
    return response.status(200).send(allFilms);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }

};

export const getFilmById = async (request, response, next) => {
  const { params: { id }, } = request;

  const filmResource = await getFilmResourceById(id);

  if (filmResource) {
    return response.status(200).send(filmResource);
  } else {
    return response.status(404).send({
      message: 'Error: Music resource not found.',
    });
  }
};

export const createFilm = async (request, response) => {
  const { body } = request;

  try {
    const newFilmResource = await createFilmResource(body);
    return response.status(201).send(newFilmResource);
  } catch (error) {
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

export const updateFilmById = async (request, response) => {
  const { params: { id }, body, } = request;

  try {
    const filmResource = await updateFilmResource(id, body);
    return response.status(200).send(filmResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

export const deleteFilmById = async (request, response) => {
  const { params: { id }, } = request;

  try {
    const deleteMessage = await deleteFilmResource(id);
    return response.status(200).send({
      message: deleteMessage,
    })    
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }

};