require("../connection");

const User = require("../models/User");

const updateUsers = async () => {
  const user = await User.updateOne({username: 'fazt'}, {
    password: 'security'
  });
  console.log(user)
};

updateUsers();
