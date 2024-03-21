const express = require('express');
const Stage = require('../models/stage'); // Ensure the path is correctly pointed to your Stage model
const stages = express.Router();
const { Op } = require('sequelize');

stages.get('/', async (req, res) => {
    try {
        const foundStages = await Stage.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        });
        res.status(200).json(foundStages);
    } catch (error) {
        res.status(500).json(error);
    }
});

stages.post('/', async (req, res) => {
    try {
        const newStage = await Stage.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new stage',
            data: newStage
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

stages.put('/:id', async (req, res) => {
    try {
        const updatedStages = await Stage.update(req.body, {
            where: {
                id: req.params.id // Adjust if your primary key is named differently
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedStages} stage(s)`
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

stages.delete('/:id', async (req, res) => {
    try {
        const deletedStages = await Stage.destroy({
            where: {
                id: req.params.id // Adjust if your primary key is named differently
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedStages} stage(s)`
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = stages;
