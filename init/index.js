const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const MongoURL ="mongodb://127.0.0.1:27017/Wanderlust"

main().then(()=>{
    console.log("Connected to the DB...");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MongoURL);
}

const initDb = async ()=>{
    await listing.deleteMany({});
    await listing.insertMany(initData.data)  //InitData is the object in the data.js and in that object we have to access the Key Data
    console.log("Data was initiase");
}

initDb(); 