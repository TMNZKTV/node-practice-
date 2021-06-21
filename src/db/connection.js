// const MongoClient = require("mongodb").MongoClient;
// const collections = {};

const mongoose = require("mongoose");
// const { Schema } = mongoose;

const connectMongo = async () => {
  return mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = {
  connectMongo,
};
