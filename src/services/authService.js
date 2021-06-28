const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const { User } = require("../db/userModel");
const { NotAuthorizedError } = require("../helpers/errors");

const registration = async (email, password) => {
  const user = new User({ email, password });
  await user.save();
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new NotAuthorizedError(`no user with ${email} found`);
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new NotAuthorizedError(`Wrong password!`);
  }

  const token = jsonwebtoken.sign(
    {
      _id: user.id,
      createdAt: user.createdAt,
    },
    process.env.JWT_SECRET
  );
  return token;
};

module.exports = {
  registration,
  login,
};
