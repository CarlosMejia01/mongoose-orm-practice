require("../connection");

const User = require("../models/User");

const findAndUpdateUser = async () => {
  const user = await User.findOne({ username: "Joe" });
  console.log(user);
  user.password = "minuevacontrasena";
  user.save();
};

const updateUsers = async () => {
  const user = await User.updateOne(
    { username: "fazt" },
    {
      password: "security",
    }
  );
  console.log(user);
};

findAndUpdateUser();
