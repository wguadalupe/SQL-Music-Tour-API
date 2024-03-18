// DEPENDENCIES
const express = require('express');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();

// CONFIGURATION / MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// DATABASE CONNECTION
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/music_tour`);

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

// ROOT ROUTE
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

// SERVER LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
