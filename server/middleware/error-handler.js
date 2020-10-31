const errorHandlerMiddleware = (error, request, response, next) => {
  const { message } = error;
  response.status(400).send({
    message,
  });
};

export default errorHandlerMiddleware;