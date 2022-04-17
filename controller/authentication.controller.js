
//aticle model
const User = require('../model/user.model');
// wrapper contain trycatch for error handling
const safeCall = require('../utils/safeCall.utils');

const getUser = safeCall(async (request, response, _next) => {

    const { username, password } = request.body;
    const user = await User.findOne({ username }, { '_id': 1, 'createdAt': 0, 'updatedAt': 0, '__v': 0, }).select('+password');

    if (!user) return response.status(403).json({ path: request.originalUrl, success: false, result: { error: "User does`nt exist" } });
    if (user.password !== password) return response.status(403).json({ path: request.originalUrl, success: false, result: { error: "Wrong username or password" } });

    return response.json({ path: request.originalUrl, success: true, result: { user: user } });

});


module.exports = {
    getUser,
};