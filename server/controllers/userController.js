const User = require("../models/user");

const jwt = require("jsonwebtoken");

//Mongo DB id
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // create a token
    const token = createToken(user._id);
    const userName = user.name;
    const userParent = user.parent;

    res.status(200).json({ email, token, userName, userParent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// signup a user
const signupUser = async (req, res) => {
  const { name, email, password, parent } = req.body;

  try {
    const user = await User.signup(name, email, password, parent);
    // create a token
    const token = createToken(user._id);

    res.status(200).json({ name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
