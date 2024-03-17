// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    });
});

//DATABASE
const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5432/music_tour`);

try {
    // Since 'await' cannot be used outside of an async function, wrap this in an IIFE (Immediately Invoked Function Expression) that is async
    (async () => {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    })();
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`);
});
