const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_DATABASE_NAME } = process.env;

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${MONGO_INITDB_ROOT_DATABASE_NAME}?authSource=admin`
        );
        console.log(" 📗 Database connected successfully ");
    } catch (error) {
        console.log(error);
    }
};

module.exports = { connectDatabase };
