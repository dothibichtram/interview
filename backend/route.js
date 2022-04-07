const router = require('express').Router();

const jokeController = require('./controllers/Joke');

router.get('/joke', jokeController.getAll);
router.get('/joke/:id', jokeController.getSingle);
router.put('/joke/:id', jokeController.update);

module.exports = router;