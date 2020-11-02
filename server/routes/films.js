import express from 'express';

import {
  listFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} from '../controllers/films.js';

import {
  listActors,
  getActorById,
  createActor,
  updateActorById,
  deleteActorById,
} from '../controllers/actors.js';

const filmsRouter = express.Router();

//LIST ALL MUSIC RESOURCES

filmsRouter.get('/film', listFilms);

filmsRouter.get('/film/:id', getFilmById);

filmsRouter.post('/film', createFilm);

filmsRouter.put('/film/:id', updateFilmById);

filmsRouter.delete('/film/:id', deleteFilmById);

//LIST ALL ACTORS RESOURCES

filmsRouter.get('/actor', listActors);

filmsRouter.get('/actor/:id', getActorById);

filmsRouter.post('/actor', createActor);

filmsRouter.put('/actor/:id', updateActorById);

filmsRouter.delete('/actor/:id', deleteActorById);

export default filmsRouter;
