const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require('../../models/User')

// @route   GET api/auth
// @desc    Test route 
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkNjAwN2IyMWYwMDQ1ZTg0MDJjM2JhIn0sImlhdCI6MTU5MTA4MzEzMSwiZXhwIjoxNTkxNDQzMTMxfQ.UJAG5tc9TAZy_1sShqRc2h9Bcvug8TFf0dMmb_FAknI