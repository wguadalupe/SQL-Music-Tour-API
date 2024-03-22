require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

// Explicitly create the connection string or use DB_CONNECTION if directly provided
const connectionString = process.env.DB_CONNECTION || `${process.env.DB_DIALECT}://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

// Initialize Sequelize with the connection string and explicitly set the dialect
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: process.env.DB_DIALECT || 'postgres' // Default to 'postgres' if not specified
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const bandsController = require('./controllers/bands_controller');
app.use('/bands', bandsController);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Music Tour API' });
});

app.listen(port, () => {
    console.log(`🎸 Rockin' on port: ${port}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});
