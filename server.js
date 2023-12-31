const mongoose = require('mongoose');
const app = require('./app');

const { DB_URI, PORT = 8000 } = process.env;

mongoose.set('strictQuery', true);

(async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT);
    console.log(`Database connection successful on port ${PORT}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
})();
