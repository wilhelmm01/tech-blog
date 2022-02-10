
const router = require('express').Router();

const userRoutes = require('./user-routes');

const postRoutes = require('./post-routes');

const commentRoutes = require('./comment-routes');

// Define route path for the API to use, e.g. api/users/
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;