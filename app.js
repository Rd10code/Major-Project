const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");


const MongoURL ="mongodb://127.0.0.1:27017/Wanderlust"

main().then(()=>{
    console.log("Connected to the DB...");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect(MongoURL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Root is Active");
})


//index Route
app.get("/listings", async(req,res)=>{
   const allListings =await Listing.find({});
   res.render("listings/index.ejs",{allListings});
    // res.send("Listing Has send the DATA");
    
})

//New Route
app.get("/listings/new",(req,res)=>{
    // let{id}=req.params;
    // const listing = await Listing.findById(id);
    res.render("listings/new.ejs")
})
//Show Route
app.get("/listings/:id",async(req,res)=>{
    let{id}=req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})

//Create Route
app.post("/listings",async(req,res)=>{
    const newListing =new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    // console.log(listing);
})


// app.get("/testListing", async(req,res)=>{ 
//     let sampleListing =new Listing({
//         title:"New villa",
//         Description:"My new Villa",
//         price:1200,
//         location:"Baner Pune",
//         country:"India"
//     })

//     await sampleListing.save();
//     console.log("Sample Was Saved...");
//     res.send("Succesful Testing ");
// })

app.listen(8080,()=>{
    console.log("App is Running");
})