const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController.js');

// Route for /api/users
router.route('/')
    .get(getUsers)      // Get ALL Users
    .post(createUser);  // Create a new User

// Route for /api/user/:userId (ObjectId / ID for User)
router.route('/:userId')
  .get(getSingleUser)   // Get SINGLE User
  .put(updateUser)      // Update User
  .delete(deleteUser);  // Delete User

// Route for /api/user/:userId/friends/:friendId (Add & Delete friend from user)
router.route('/:userId/friends/:friendId')
  .post(addFriend)      // Add a friend
  .delete(deleteFriend) // Delete a friend


module.exports = router;