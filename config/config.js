// Module dependencies.
require('dotenv').config();

// get environment
const env = process.env.NODE_ENV;

// development environment variables
const development = {
    // app variable (port)
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 3000
    },
    //database variable (DBhost, DBport, DBname)
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'ESTER'
    },
    //user information for first run
    user: {
        first_name: process.env.USER_FIRSTNAME,
        last_name: process.env.USER_LASTNAME,
        username: process.env.USER_USERNAME,
        password: process.env.USER_PASSWORD,
    }
};

const config = {
    development
};

module.exports = config[env];