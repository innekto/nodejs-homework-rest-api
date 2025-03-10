// обгортка для коннтроллерів із загальним блоком try...catch
const controllersWrapper = (ctrl) => {
  const func = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = { controllersWrapper };
