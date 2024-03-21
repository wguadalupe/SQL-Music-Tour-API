const express = require('express');
const Event = require('../models/event'); // Ensure the path is correct to your Event model
const events = express.Router();
const { Op } = require('sequelize');

events.get('/', async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        });
        res.status(200).json(foundEvents);
    } catch (error) {
        res.status(500).json(error);
    }
});

events.post('/', async (req, res) => {
    try {
        const newEvent = await Event.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

events.put('/:id', async (req, res) => {
    try {
        const updatedEvents = await Event.update(req.body, {
            where: {
                id: req.params.id // Assuming your primary key is named id. Adjust if necessary.
            }
        });
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} event(s)`
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

events.delete('/:id', async (req, res) => {
    try {
        const deletedEvents = await Event.destroy({
            where: {
                id: req.params.id // Assuming your primary key is named id. Adjust if necessary.
            }
        });
        res.status(200).json({
            message: `Successfully deleted ${deletedEvents} event(s)`
        });
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = events;
