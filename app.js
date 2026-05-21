const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MongoURL ="mongodb://127.0.0.1:27017/Wanderlust"

main().then(()=>{
    console.log("Connected to the DB...");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MongoURL);
}

app.get("/",(req,res)=>{
    res.send("Root is Active");
})

app.get("/testListing", async(req,res)=>{
    let sampleListing =new Listing({
        title:"New villa",
        Description:"My new Villa",
        price:1200,
        location:"Baner Pune",
        country:"India"
    })

    await sampleListing.save();
    console.log("Sample Was Saved...");
    res.send("Succesful Testing ");
})

app.listen(8080,()=>{
    console.log("App is Running");
})