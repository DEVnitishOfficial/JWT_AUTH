
const mongoose = require ('mongoose');
const MONGO_DB_URL = process.env.MOGODB_URI || "mongodb://localhost:27017/my_database";

const dbconnect = () => {
   mongoose
   .connect(MONGO_DB_URL)
   .then((conn) => console.log(`Connected to DB: ${conn.connection.host}`))
   .catch((err) => console.log(err.message))

}

module.exports = dbconnect;
