const { User, Thought } = require('../models');

module.exports = {

    async getThoughts(req, res) {       // Get all thoughts
        try {
          const thoughts = await Thought.find();
          res.json(thoughts);

        } catch (err) {
          res.status(500).json(err);
        }
      },

      async createThought(req, res) {   // Create a new thought
        try {
          const thoughts = await Thought.create(req.body);
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async getSingleThought(req, res) {   // Get single thought by ID
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

      async updateThought(req, res) {   // Update a thought by ID
        try {
          const thoughts = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
          );

          if (!thoughts) {
            return res.status(404).json({ message: 'No thoughts with this id found.' });
          }

          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      async deleteThought(req, res) {   // Delete a thought by ID
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

      async createReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate( //Update is used so that we update the thought record with the reaction
                { _id: req.params.thoughtId }, // Find the thought by it's ID provided
                { $addToSet: { reactions: req.body } }, // Add to `reactions` the request body contents
                { runValidators: true, new: true }
                );
  
            if (!thoughts) {
              return res.status(404).json({ message: 'No thoughts with this id found.' });
            }
  
            res.json(thoughts);
          } catch (err) {
            res.status(500).json(err);
          }
      },


      async deleteReaction(req, res) {
        try {
            const thoughts = await Thought.findOneAndUpdate( //Update is used so we only remove the reaction, not the thought & reaction
                { _id: req.params.thoughtId }, // Find the thought by it's ID provided
                { $pull: { reactions: req.params.reactionId } }, // Find the reaction in that specific thought and `pull` it
                { runValidators: true, new: true }
                );
  
            if (!thoughts) {
              return res.status(404).json({ message: 'No thoughts with this id found.' });
            }
  
            res.json(thoughts);
          } catch (err) {
            res.status(500).json(err);
          }
      },
}