
module.exports = {
  development: {
    username: 'process.env.DB_USER',
    password: 'process.env.DB_PASS',
    host: 'process.env.DB_HOST',
    port: 5432,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  // test: {
  //   username: process.env.CI_DB_USERNAME,
  //   password: process.env.CI_DB_PASSWORD,
  //   database: process.env.CI_DB_NAME,
  //   host: '127.0.0.1',
  //   port: 3306,
  //   dialect: 'mysql',
  //   dialectOptions: {
  //     bigNumberStrings: true
  //   }
  // },
  // production: {
  //   username: process.env.PROD_DB_USERNAME,
  //   password: process.env.PROD_DB_PASSWORD,
  //   database: process.env.PROD_DB_NAME,
  //   host: process.env.PROD_DB_HOSTNAME,
  //   port: process.env.PROD_DB_PORT,
  //   // dialect: 'mysql',
  //   // dialectOptions: {
  //   //   bigNumberStrings: true,
  //   //   ssl: {
  //   //     ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
  //   //   }
  //   //}
  };
