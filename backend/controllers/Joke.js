const JokeModel = require('../models/Joke');

class JokeController {
  async getAll(req, res) {
    try {
      const result = await JokeModel.find()
      res.status(200).json(result);
    } catch (error) {
      console.log(error)
    }
  }

  async getSingle(req, res) {
    try {
      const result = await JokeModel.findOne({ma: req.params.id});
      res.status(200).json(result);
    } catch (error) {
      console.log(error)
    }
  }

  async update(req, res) {
    try {
      console.log(req.params.id);
      console.log(req.body.vote);

      const joke = await JokeModel.findOne(req.params.id);
      if (req.body.vote == 'funny') {
        await JokeModel.updateOne({ ma: req.params.id, phieubau: { vui: joke.phieubau.vui + 1 } });
      } else {
        
        await JokeModel.updateOne({ ma: req.params.id, phieubau: { vui: joke.phieubau.khong + 1 } });
      }
      res.status(200).json(req.body.vote);
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new JokeController();