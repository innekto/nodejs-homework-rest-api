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
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
// ============підключення до бази даних=====================//
