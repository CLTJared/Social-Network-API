const { User, Thought } = require('../models');

module.exports = {

    async getThoughts(req, res) {       // Get all users
        try {
          const thoughts = await Thought.find();
          res.json(thoughts);

        } catch (err) {
          res.status(500).json(err);
        }
      },

      async createThought(req, res) {   // Get all users
        try {
          const thoughts = await Thought.create(req.body);
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async getSingleThought(req, res) {   // Get all users
        try {
          const thoughts = await Thought.findOne({ _id: req.params.thoughtId });

          if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with this id found.' });
          }

          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async deleteThought(req, res) {   // Get all users
        try {
          const thoughts = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

          if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with this id found.' });
          }

          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}