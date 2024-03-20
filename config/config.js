module.exports = {
  development: (() => {
    // Logging environment variables
    console.log('DB_USER:', process.env.DB_USER);
    console.log('DB_PASS:', process.env.DB_PASS);
    console.log('DB_HOST:', process.env.DB_HOST);

    // Returning the configuration object
    return {
      username: process.env.DB_USER, 
      password: process.env.DB_PASS, 
      database: process.env.DB_NAME,
      host: process.env.DB_HOST, 
      port: 5432,
      dialect: 'postgres',
      dialectOptions: {
        bigNumberStrings: true
      }
    };
  })() // Immediately invoked function expression (IIFE)
};
