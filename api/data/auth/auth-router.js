const router = require("express").Router();
const Users = require("../users/users-model");
const helpers = require("./build-token");
const bcrypt = require("bcryptjs");
const { checkPayload } = require("./auth-middleware");

// REGISTER NEW USER
router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  Users.add({ username, password: hash })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

// LOGIN USER
router.post("/login", checkPayload, async (req, res, next) => {
  try {
    const { username } = req.body;
    const [currentUser] = await Users.findBy({ username });

    const token = helpers.buildToken(req.body.username);
    res.status(200).json({
      token,
      currentUser,
      message: `Welcome back ${req.body.username}`
    });
  } catch (error) {
    next(error);
  }
});

// LOGOUT USER
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.json({ message: "you can checkout, but you can never leave!" });
      } else {
        res.status(200).json({ message: "bye, thanks for playing!" });
      }
    });
  } else {
    res.status(200).json({ message: "You were never here " });
  }
});

module.exports = router;
