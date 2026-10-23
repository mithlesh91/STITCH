import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
  price: {
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        enum: ["INR", "USD", "JPY", "EUR", "GBP"],
        default: "INR"
    }
},
    image: [
        {
            url: {
                type: String,
                required: true
            }
        }

    ]

}, { timestamps: true })

const productmodel = mongoose.model("product", productSchema)

export default productmodel