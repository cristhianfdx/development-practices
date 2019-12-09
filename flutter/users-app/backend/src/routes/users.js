const router = require('express').Router();

const User = require('../models/User');

const faker = require('faker');

router.route('/api/users')
    .get(async(req, res)=>{
        const users = await User.find();
        res.json({users});
    })

router.route('/api/users/create')
    .get(async (req, res)=>{
        for(let i = 0; i< 5; i++){
            await User.create({
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName(),
                avatar: faker.image.avatar()
            })
        }
        res.json("five users created");
    })

module.exports = router;