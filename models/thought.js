const { Schema, model } = require('mongoose');
const reacts = require('./reacts');

// Create `thought` Schema
const thoughtSchema = new Schema(
  {
    user_id: {
        type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    react: [reacts], // Importing react schema
    text: {
      type: String,
      minLength: 5,
      maxLength: 250,
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
  .virtual('reactCount')
  // Getter
  .get(function () {
    return this.react.length;
  });

// Initialize `thought` model
const Thought = model('thought', postSchema);

module.exports = Thought;