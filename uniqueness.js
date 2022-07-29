require("./connection");

const User = require("./models/User");

const createUsers = async () => {
  const userOne = new User({
    username: "Dona",
    password: "12345",
  });

  await userOne.save();

  const userTwo = new User({
    username: "Cameron",
    password: "securepassword",
  });

  await userTwo.save();
};

createUsers();
