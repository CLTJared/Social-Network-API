const { Schema, model } = require('mongoose');

// Create `user` Schema
const userSchema = new Schema(
  {
    username: { 
        String, 
        unique: true, 
        required: true, 
        trim: true 
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

// Increases friend count in User model object when friends are added by a user
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });


// Initialize `thought` model
const User = model('user', userSchema);

module.exports = User;