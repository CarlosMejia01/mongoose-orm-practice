require("./connection");

const User = require("./models/User");


const createUsers = async () => {
  const userOne = new User({
    username: "fazt",
    password: "12345",
  });

  await userOne.save();

//   const userTwo = new User({
//     username: "fazt",
//     password: "securepassword",
//   });

//   await userTwo.save();
};

createUsers();
