const express = require("express");
const mongoose = require("mongoose");
require("./db/mongoose");
const User = require("../models/user.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const { isAsyncFunction } = require("util/types");
// const users = require("../routes/user.js");

const app = express();

// app.use("users", users);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const CONNECTION_URL =
  "mongodb+srv://shhadyse:Bex1234!@cluster0.5bom4.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true,
});
// .then(() =>
//   app.listen(PORT, () => {
//     "server is up";
//   })
// )
// .catch((e) => {
//   console.log(e.message);
// });
// mongoose.set("useFindAndModify", false);

app.post("/users", async (req, res) => {
  const newUser = req.body;
  const user = new User(newUser);
  try {
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).send(e);
  }

  //   user
  //     .save()
  //     .then(() => {
  //       res.status(201).send(user);
  //     })
  //     .catch((e) => {
  //       res.status(400).send(e);
  //     });
});
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    // res.json(users);
    res.send(users);
    console.log(users);
  } catch (e) {
    res.status(500).send(e);
  }
  //   user.find({})
  //     .then((users) => {
  //       res.send(users);
  //     })
  //     .catch((e) => {
  //       res.status(500).send(e);
  //     });
});

app.get("/users/:id", async (req, res) => {
  _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send("user not found");
    }
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
  //   user.findById(_id)
  //     .then((user) => {
  //       if (!user) {
  //         return res.status(404).send("user not found");
  //       }
  //       res.send(user);
  //     })
  //     .catch((e) => {
  //       res.status(500).send(e);
  //     });
});

app.get("/active", (req, res) => {
  User.find({ isActive: true })
    .then((users) => {
      if (!users) {
        return res.status(404).send("user not found");
      }
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/active", (req, res) => {
  //   const isactive = req.params.isactive;
  User.find({ isActive: true })
    .then((users) => {
      if (!users) {
        return res.status(404).send("user not found");
      }
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.get("/range", (req, res) => {
  //   const isactive = req.params.isactive;
  User.find({ "account.cash": { $gte: 500, $lt: 1200 } })
    .then((users) => {
      if (!users) {
        return res.status(404).send("user not found");
      }
      res.send(users);
    })
    .catch((e) => {
      res.status(500).send(e);
    });
});

app.patch("/users/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "firstName",
    "lastName",
    "passportID",
    "isActive",
    "cash",
    "credit",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

const deposit = async (body) => {
  const amount = body.amount;

  const id = body.toID;
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found!");
  }
  user.cash += Number(body.amount);
  return await user.save();
};

const withdraw = async (body) => {
  const amount = body.amount;

  const id = body.fromID;
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found!");
  }
  user.cash -= Number(body.amount);
  return await user.save();
};

app.put("/deposit", async (req, res) => {
  try {
    const depositUser = await deposit(req.body);
    res.json({ depositUser });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});
app.put("/withdraw", async (req, res) => {
  try {
    const withdrawUser = await withdraw(req.body);
    res.json({ withdrawUser });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});
app.put("/transfer", async (req, res) => {
  try {
    const depositUser = await deposit(req.body);
    const withdrawUser = await withdraw(req.body);
    res.json({ fromUser: withdrawUser, toUser: depositUser });
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(PORT, () => {
  console.log("server is up");
});
