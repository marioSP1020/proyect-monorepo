import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import filmsData from './films.js';
import Film from '../models/films.js';

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
  })
);