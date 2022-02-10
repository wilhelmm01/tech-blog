const { User } = require('../models');

const userData = [
  {
    username: "ME",
    email: "me@aol.com",
    password: "1111"
  },

];

const seedUsers = () => User.bulkCreate(userData);



module.exports = seedUsers;