import express from 'express';
import bodyparser from 'body-parser';

const HOST = '127.0.0.1';
const PORT = 5000;

//CREAMOS SERVIDOR

const app = express();

//NUESTRO SERVIDOR ESCUCHA PETICIONES POR EL PUERTO QUE DEFINIMOS

app.listen(PORT, () => console.log(`Serving on port ${PORT}`));
