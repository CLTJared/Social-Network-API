const { Schema, model } = require('mongoose');

// Create `user` Schema
const userSchema = new Schema(
  {
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      // Needs match? or validate? to come..
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "thought",
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Creates virtual column that checks the friends array and sets its length value to the virtual column
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });


// Initialize `user` model
const User = model('user', userSchema);

module.exports = User;