// const express = require("express");
// const User = require("../src/models/user");
// const router = express.Router();

// router.post("/", async (req, res) => {
//   const user = new User(req.body);
//   try {
//     await user.save();
//     res.status(201).send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }

//   //   user
//   //     .save()
//   //     .then(() => {
//   //       res.status(201).send(product);
//   //     })
//   //     .catch((e) => {
//   //       res.status(400).send(e);
//   //     });
// });

// router.get("/", (req, res) => {
//   res.send("this works");
//   // try {
//   //   const users = await User.find({});
//   //   res.send(users);
//   // } catch (e) {
//   //   res.status(500).send(e);
//   // }
//   //   Product.find({})
//   //     .then((products) => {
//   //       res.send(products);
//   //     })
//   //     .catch((e) => {
//   //       res.status(500).send(e);
//   //     });
// });
// export default router;
// // module.exports = User;
// // router.get("/products/:id", async (req, res) => {
// //   _id = req.params.id;
// //   try {
// //     const product = await Product.findById(_id);
// //     if (!product) {
// //       return res.status(404).send("product not found");
// //     }
// //     res.send(product);
// //   } catch (e) {
// //     res.status(500).send(e);
// //   }
// //   //   Product.findById(_id)
// //   //     .then((product) => {
// //   //       if (!product) {
// //   //         return res.status(404).send("product not found");
// //   //       }
// //   //       res.send(product);
// //   //     })
// //   //     .catch((e) => {
// //   //       res.status(500).send(e);
// //   //     });
// // });

// // router.get("/active", (req, res) => {
// //   //   const isactive = req.params.isactive;
// //   Product.find({ isActive: true })
// //     .then((products) => {
// //       if (!products) {
// //         return res.status(404).send("product not found");
// //       }
// //       res.send(products);
// //     })
// //     .catch((e) => {
// //       res.status(500).send(e);
// //     });
// // });

// // router.get("/active", (req, res) => {
// //   //   const isactive = req.params.isactive;
// //   Product.find({ isActive: true })
// //     .then((products) => {
// //       if (!products) {
// //         return res.status(404).send("product not found");
// //       }
// //       res.send(products);
// //     })
// //     .catch((e) => {
// //       res.status(500).send(e);
// //     });
// // });

// // router.get("/range", (req, res) => {
// //   //   const isactive = req.params.isactive;
// //   Product.find({ "details.price": { $gte: 500, $lt: 1200 } })
// //     .then((products) => {
// //       if (!products) {
// //         return res.status(404).send("product not found");
// //       }
// //       res.send(products);
// //     })
// //     .catch((e) => {
// //       res.status(500).send(e);
// //     });
// // });

// // router.patch("/prdoducts/:id", async (req, res) => {
// //   const updates = Object.keys(req.body);
// //   const allowedUpdates = [
// //     "name",
// //     "category",
// //     "isActive",
// //     "details.description",
// //     "details.price",
// //     "details.discount",
// //     "details.",
// //   ];
// //   const isValidOperation = updates.every((update) =>
// //     allowedUpdates.includes(update)
// //   );

// //   if (!isValidOperation) {
// //     return res.status(400).send({ error: "Invalid updates!" });
// //   }

// //   try {
// //     const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
// //       new: true,
// //       runValidators: true,
// //     });

// //     if (!product) {
// //       return res.status(404).send();
// //     }

// //     res.send(user);
// //   } catch (e) {
// //     res.status(400).send(e);
// //   }
// // });

// // router.delete("/products/:id", async (req, res) => {
// //   try {
// //     const product = await Product.findByIdAndDelete(req.params.id);

// //     if (!product) {
// //       return res.status(404).send();
// //     }

// //     res.send(product);
// //   } catch (e) {
// //     res.status(500).send();
// //   }
// // });
