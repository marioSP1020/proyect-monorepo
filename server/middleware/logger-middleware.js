import logger from '../lib/logger.js';

const httpLoggerMiddleware = async (request, response, next) => {
  const { method, url, hostname, body } = request;
  const { statusCode, statusMessage } = response;
  logger.info({ request: { method, url, hostname, body } });
  logger.info({ response: { url, statusCode, statusMessage } });
  next();
};

export default httpLoggerMiddleware;




//Error [ERR_MODULE_NOT_FOUND]: Cannot find module 
//'/home/mario/development/proyect-monorepo/server/middleware/logger-middleware' imported from 
// home / mario / development / proyect - monorepo / server / index.js
//Did you mean to import ../middleware/logger-middleware.js?
