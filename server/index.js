import express from 'express';
import bodyParser from 'body-parser';
import logger from './lib/logger.js';
import mongoose from 'mongoose';

//MIDDLEWARE
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


//Error [ERR_MODULE_NOT_FOUND]: Cannot find module 
//'/home/mario/development/proyect-monorepo/server/middleware/logger-middleware' imported from 
// home / mario / development / proyect - monorepo / server / index.js
//Did you mean to import ../middleware/logger-middleware.js?




//ROUTER
import filmsRouter from './routes/films.js';


const HOST = 'localhost';
const PORT = 5000;

//MONGO DB
export const databaseURI = 'mongodb://localhost/mongoose-midata';

//CREAMOS SERVIDOR
const app = express();

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// El servidor utilizará como deserializador de data bodyparser y deserializara en JSON
app.use(bodyParser.json());
// Utiliza un middleware que permite tener descripciones mas especificas en la consola
app.use(httpLoggerMiddleware);
// Utiliza un middleware que permite crear headers de respuesta que indiquen que el contenido es JSON
app.use(jsonResponseMiddleware);

// El router de musica
app.use(filmsRouter);

// Sino no hay rutas definidas envia error al cliente
app.use(errorHandlerMiddleware);


//NUESTRO SERVIDOR ESCUCHA PETICIONES POR EL PUERTO QUE DEFINIMOS

//app.listen(PORT, () => console.log(`Serving on port ${PORT}`));

//USAMOS LOGGER EN VEZ DE CONSOLE.LOG
app.listen(PORT, () =>
  logger.info(`Serving on listening ${JSON.stringify({ HOST, PORT })}`),
);
