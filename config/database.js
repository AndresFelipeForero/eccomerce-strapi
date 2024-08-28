// path: ./config/env/production/database.js

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
 
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_LOCAL_HOST'),
        port: env('DATABASE_LOCAL_PORT'),
        database: env('DATABASE_LOCAL_NAME'),
        user: env('DATABASE_LOCAL_USERNAME'),
        password: env('DATABASE_LOCAL_PASSWORD'),
      },
      debug: false,
    },
  }
};
