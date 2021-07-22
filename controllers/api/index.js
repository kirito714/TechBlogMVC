const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentsRoutes = require('./commentsRoutes');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/commentsRoutes', commentsRoutes);


module.exports = router;