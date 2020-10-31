import express from 'express';
import {
  listFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,

} from '../controllers/films.js';
//import Film from '../models/films.js';

const filmsRouter = express.Router();

//LIST ALL MUSIC RESOURCES

filmsRouter.get('/film', listFilms);

filmsRouter.get('/film/:id', getFilmById);

filmsRouter.post('/film', createFilm);

filmsRouter.put('/film/:id', updateFilmById);

filmsRouter.delete('/film/:id', deleteFilmById);


export default filmsRouter;