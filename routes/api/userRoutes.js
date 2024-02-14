const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controllers/userController.js');

// Route for /api/users
router.route('/')
    .get(getUsers)      // Get ALL Users
    .post(createUser);  // Create a new User

// Route for /api/user/:userId (ObjectId / ID for User)
router.route('/:userId')
  .get(getSingleUser)   // Get SINGLE User
  .put(updateUser)      // Update User (Add Friend)
  .delete(deleteUser);  // Delete User

router.route('/:userId/friends/:friendId')
  .post((req, res) => res.send("Route not yet implemented"))
  .delete((req, res) => res.send("Route not yet implemented"))

  
module.exports = router;