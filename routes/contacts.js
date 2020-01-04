const express = require('express');
const router = express.Router();

// @route  Get api/constacts
// @desc   Get all users constacts
// @access Private
router.get('/', (req,res) => {
    res.send('Get all contacts');
});

// @route  POST api/constacts
// @desc   Add new constact
// @access Private
router.post('/', (req,res) => {
    res.send('Add contact');
});

// @route  PUT api/constacts/:id
// @desc   Update constact
// @access Private
router.put('/:id', (req,res) => {
    res.send('Update contact');
});

// @route  DELETE api/constacts/:id
// @desc   Delete constact
// @access Private
router.put('/:id', (req,res) => {
    res.send('Delete contact');
});

module.exports = router;