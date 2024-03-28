// import mongoose from "mongoose";
const bcrypt = require('bcrypt');
const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema ({
    username: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
})


const UserModel = mongoose.model("User", UserSchema)

const predefinedUsers = [
    {
      username: "user1",
      email: "user1@example.com",
      password: "password1"
    },
    {
      username: "user2",
      email: "user2@example.com",
      password: "password2"
    }
    // Add more predefined users as needed
  ];

// Hash passwords for regular users
Promise.all(predefinedUsers.map(user => {
  return new Promise((resolve, reject) => {
      bcrypt.hash(user.password, 10, (err, hashedPassword) => {
          if (err) {
              console.error(`Error hashing password for ${user.username}:`, err);
              reject(err);
          } else {
              user.password = hashedPassword;
              resolve();
          }
      });
  });
}))
.then(() => {
  // Insert predefined users into the database
  UserModel.insertMany(predefinedUsers)
      .then(() => {
          console.log("Predefined users inserted successfully");
      })
      .catch(err => {
          console.error("Error inserting predefined users:", err);
      });
})
.catch(err => {
  console.error("Error hashing passwords for predefined users:", err);
});
  
module.exports = {
  UserModel,
  initializeUsers: async () => {

      for (const user of predefinedUsers) {
          try {
              const hashedPassword = await bcrypt.hash(user.password, 10);
              user.password = hashedPassword;
              await UserModel.create(user);
          } catch (err) {
              console.error("Error inserting predefined user:", err);
          }
      }
  }
};