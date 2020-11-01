import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema(
  {
    NameArtistic: String,
    NameOrigin: String,
    FecNac: String,
    Nationality: String,
    Occupation: String,
    Films: String,
    Photo: String,
  },
  {
    timestamps: true,
  }

);

const Actor = mongoose.model('Actor', actorSchema);

export const getAllActors = async () => {
  try {
    return await Actor.find();    
  } catch (error) {
    throw new Error(error);
  }
};

export const getActorResourceById = async (id) => {
  try {
    return await Actor.findById(id);   
  } catch (error) {
    throw new Error(error);
  }
};

export const createActorResource = async (data) => {
  try {
    return await Actor.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateActorResource = async (id, data) => {
  try {
    return await Actor.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteActorResource = async (id) => {
  try {
    return await Actor.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Actor;