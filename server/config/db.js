const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connect) {
      console.log("Connected to DB");
    }
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
