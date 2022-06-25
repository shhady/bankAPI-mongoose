// const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/storeAPI", {
//   useNewUrlParser: true,
//   //   useCreateIndex: true,
// });

// const Product = mongoose.model("product", {
//   name: { type: String, required: true },
//   category: { type: String, required: true },
//   isActive: { type: Boolean },
//   details: {
//     description: { type: String, required: true, min: 10 },
//     price: { type: Number, required: true },
//     discount: { type: Number, default: 0 },
//     images: {
//       type: [String],
//       required: true,
//       validate: {
//         validator: (v) => v.length >= 2,
//         message: (props) => `${props} has less than 2 images`,
//       },
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//       validate(value) {
//         console.log(value);
//         if (value.slice(0) !== 9) {
//           throw new Error("number is not israeli");
//         }
//       },
//       //    {
//       // validator: (v) => v.slice(0, 2) === "972",
//       // message: (props) => `${props} not israeli number`,
//       //   },
//     },
//     dateAdded: { type: Date, immutable: true, default: new Date() },
//   },
// });

// const third = new Product({
//   name: "Puma T-shirt",
//   category: "T-shirt",
//   isActive: true,
//   details: {
//     description: "amazing cotton T-shirt ",
//     price: 300,
//     discount: 0,
//     images: ["image7", "image8"],
//     phoneNumber: "972543113297",
//     // dateAdded: 6/20/2022
//   },
// });
// third.save();
