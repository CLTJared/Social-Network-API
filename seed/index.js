const { User, Thought } = require("../models");
const mongoose = require("mongoose");

const connection = require("../config/connection");

// Seed data for creating users
  const users = [
    {
      username: "JaredUNCC",
      email: "jared@edx-bootcamp.com",
      thoughts: [],
      friends: []
    },
    {
      username: "RogerEDX",
      email: "roger@edx-bootcamp.com",
      thoughts: [],
      friends: []
    },
    {
      username: "SashaEDX",
      email: "sasha@edx-bootcamp.com",
      thoughts: [],
      friends: []
    },
  ];

console.log(connection);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});                // Delete any existing User records so we don't have issues
  await User.collection.insertMany(users);  // Create users from `users` array above

  console.table(users);
  console.info("Seeding complete...");
  process.exit(0);
});