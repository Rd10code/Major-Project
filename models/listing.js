const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    image: {
        filename: {
            type: String,
            default: "listingimage",
        },

        url: {
            type: String,
            default:
                "https://images.unsplash.com/photo-1483005954020-0176b0c2b982?q=80&w=871&auto=format&fit=crop",
        },
    },

    price: {
        type: Number,
    },

    location: {
        type: String,
    },

    country: {
        type: String,
    },
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;