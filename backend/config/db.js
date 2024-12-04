const mongoose = require("mongoose");

const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected");
    } catch (error) {
        console.log("could not connect to mongo");
        console.error("error: ", error);
    }
}

module.exports = mongoConnect;