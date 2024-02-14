const router = require('express').Router();

// Route for /api/thoughts
router.route('/')
    .get((req, res) => res.send("Route not yet implemented"))       // Get all thoughts
    .post((req, res) => res.send("Route not yet implemented"))      // Create a new thought

router.route('/:thoughtId')
    .get((req, res) => res.send("Route not yet implemented"))       // Get single thought 
    .put((req, res) => res.send("Route not yet implemented"))       // Update a thought
    .delete((req, res) => res.send("Route not yet implemented"))    // Delete a thought

router.route('/:thoughtId/reactions')
    .post((req, res) => res.send("Route not yet implemented"))      // Create new reaction to thought
    .delete((req, res) => res.send("Route not yet implemented"))    // Delete reaction

module.exports = router;