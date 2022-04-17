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
};

const config = {
    development
};

module.exports = config[env];