const userValidator = (req, res, next) => {
    if (!req.body.username || !req.body.password)
        return res.status(401).json({ path: "authentication", success: false, result: { error: "Please fill username and password" } });
    next();
}
module.exports = userValidator;