const errorMessageList = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

// модуль для створення об'єктів помилок з визначеним статусом та повідомленням,
// що допомагає при обробці та видачі відповідних помилок
const HttpError = (status, message = errorMessageList[status]) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { HttpError };
