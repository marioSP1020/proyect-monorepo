import {
  getAllActors,
  getActorResourceById,
  createActorResource,
  updateActorResource,
  deleteActorResource
} from '../models/actors.js';

//FROM THE URL GET /FILM
export const listActors = async (request, response, next) => {

  try {
    const allActors = await getAllActors();
    return response.status(200).send(allActors);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }

};

export const getActorById = async (request, response, next) => {
  const { params: { id }, } = request;

  const actorResource = await getActorResourceById(id);

  if (actorResource) {
    return response.status(200).send(actorResource);
  } else {
    return response.status(404).send({
      message: 'Error: Music resource not found.',
    });
  }
};

export const createActor = async (request, response) => {
  const { body } = request;

  try {
    const newActorResource = await createActorResource(body);
    return response.status(201).send(newActorResource);
  } catch (error) {
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

export const updateActorById = async (request, response) => {
  const { params: { id }, body, } = request;

  try {
    const actorResource = await updateActorResource(id, body);
    return response.status(200).send(actorResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

export const deleteActorById = async (request, response) => {
  const { params: { id }, } = request;

  try {
    const deleteMessage = await deleteActorResource(id);
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