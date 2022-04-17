(async () => {

    try {
        require("../db/connection.db");
        const User = require('../model/user.model');
        const config = require('../config/config');
        const createdUser = await User.create(config.user);
        if (createdUser) {
            console.log('user created ' + `${createdUser}`);
            return process.exit(1);
        }
        console.log('create user failed');
        return process.exit(1);
    } catch (error) {
        console.log(`server error:\n ` + `please first check if there is an admin\n` + ` then make sure database is connected\n` + error);
    }

})();