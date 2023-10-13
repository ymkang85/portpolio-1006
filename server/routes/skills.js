const express = require('express');
const Skills = require('../schemas/skills');

const router = express.Router();
router.route('/skills')
    .get(async (req, res, next) => {
        try {
            const skills = await Skills.find();
            res.json(skills);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const skills = await Skills.create({
                name: req.body.name,
                value: req.body.value,
                creatAt: req.body.creatAt
            });
            console.log(skills);
            res.status(200).json(skills);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router