import 'dotenv/config';

module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  storage: './__tests__/database.sqlite',
  port: '5432',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },

};
