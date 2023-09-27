const authRouter = require('./auth');
const reviewsRouter = require('./reviews');
/* const taskRouter = require('./tasks'); */
const getCurent = require('./getCurrent');

module.exports = { authRouter, reviewsRouter, /* , taskRouter, */ getCurent };
