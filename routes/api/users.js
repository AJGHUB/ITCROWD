const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {
    check,
    validationResult
} = require('express-validator'); //removed > /check

const User = require('../../models/User')

// @route   POST api/users
// @desc    Register User > name email and password 
// @access  Public (no token needed)
router.post('/',
    [
        check('name', 'Name is required')
        .not()
        .isEmpty(),
        check('email', 'Please include a valid email')
        .isEmail(),
        check('password', 
        'Please enter a password with 6 or more characters'
        ).isLength({
            min: 6
        })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        } //async func sends an error message to the user to say above inputs are invalid

        const {
            name,
            email,
            password
        } = req.body;

        try {
            // see if user exists if user exists send back an error
            let user = await User.findOne({
                email
            });

            if (user) {
                return res
                    .status(400)
                    .json({
                        errors: [{
                            msg: 'User already exists'
                        }]
                    });
            }

            //get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })
            //creates new instance of user (does not save user)
            user = new User({
                name,
                email,
                avatar,
                password
            })
            //Encrypt password vcrypt & SAVE User
            //use salt to do the hash with using a promise from bcrypt.genSalt using rounds-10 > more is slower 
            //async await used for anything that returns a promise (saves .then scenario)   
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save();

            //return json webtoken
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                    payload,
                    config.get('jwtSecret'), 
                    { expiresIn: 360000 },
                    (err, token) => {
                    if (err) throw err;
                    res.json({ token })
                    }
                    );
            } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
);

module.exports = router;