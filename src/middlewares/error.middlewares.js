const errorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Intenal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export default errorHandlerMiddleware;
