const { Schema, model } = require('mongoose');
const reacts = require('./reacts');

// Create `thought` Schema
const thoughtSchema = new Schema(
  {
    username: {
        type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    reactions: [reacts], // Importing react schema
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual Column `reactCount` is count of reacts per thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize `thought` model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;