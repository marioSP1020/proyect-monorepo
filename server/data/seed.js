import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import filmsData from './films.js';
import Film from '../models/films.js';
import actorsData from './actors.js';
import Actor from '../models/actors.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  filmsData.map(async (filmItem) => {
    const filmResource = await Film.create({ ...filmItem });
    console.log(
      `The resource ${JSON.stringify(filmResource)} has been created`,    
    );
  }),

  actorsData.map(async (actorItem) => {
    const actorResource = await Actor.create({ ...actorItem });
    console.log(
      `the resource ${JSON.stringify(actorResource)} has been created`,
    );
  })

);