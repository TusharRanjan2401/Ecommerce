const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: mongoose.ObjectId,
      ref: "Products",
    },
  ],
  payment: {},
  buyer: {
    type: mongoose.ObjectId,
    ref: "Users",
  },
  status: {
    type: String,
    default: "Not Processed",
    enum: ["Not Processed", "Proccssing", "Shipped", "deliverd", "cancel"],
  },
},{timestamps: true});

module.exports = mongoose.model("Order", orderSchema);
