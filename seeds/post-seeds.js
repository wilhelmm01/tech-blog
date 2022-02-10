const { Post } = require('../models');

const postData = [
  {
    title: 'Title',
    post_text: 'This is my post',
    user_id: 1,
  },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;