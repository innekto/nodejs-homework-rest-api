const app = require("./app");

// ============підключення до бази даних=====================//
const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;
// встановлюємо суворий режим
// Mongoose перевірятиме, чи відповідають запити схемі моделі даних,
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
    console.log(`data on port ${PORT}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
// ============підключення до бази даних=====================//
