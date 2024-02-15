const router = require('express').Router();
const { getThoughts, createThought, getSingleThought, updateThought, deleteThought, createReaction, deleteReaction } = require('../../controllers/thoughtController.js');

// Route for /api/thoughts
router.route('/')
    .get(getThoughts)                                               // Get all thoughts
    .post(createThought)                                            // Create a new thought

router.route('/:thoughtId')
    .get(getSingleThought)                                          // Get single thought
    .put(updateThought)                                             // Update a thought
    .delete(deleteThought)                                          // Delete a thought

router.route('/:thoughtId/reactions')
    .post(createReaction)                                           // Create new reaction to thought

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)                                         // Delete reaction

module.exports = router;