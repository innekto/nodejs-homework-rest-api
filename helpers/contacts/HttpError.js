// модуль для створення об'єктів помилок з визначеним статусом та повідомленням,
// що допомагає при обробці та видачі відповідних помилок
const HttpError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

module.exports = { HttpError };
