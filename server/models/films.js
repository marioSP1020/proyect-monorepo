import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema(
  {
    Title: String,
    Year: String,
    imdbID: String,
    Type: String,
    Genre: String,
    Actors: String,
    Plot: String,
    Awards: String,
    Poster: String,
    imdbVotes: Number,
  },
  {
    timestamps: true,
  }

);

const Film = mongoose.model('Film', filmSchema);

export const getAllFilms = async () => {
  try {
    return await Film.find();    
  } catch (error) {
    throw new Error(error);
  }
};

export const getFilmResourceById = async (id) => {
  try {
    return await Film.findById(id);   
  } catch (error) {
    throw new Error(error);
  }
};

export const createFilmResource = async (data) => {
  try {
    return await Film.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateFilmResource = async (id, data) => {
  try {
    return await Film.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteFilmResource = async (id) => {
  try {
    return await Film.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Film;