const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const db = async () => {
  await mongoose.connect(process.env.DATABASE);
  console.log("Database Connected");
};

module.exports = db;
