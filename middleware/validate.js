const validate = (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
};

module.exports = validate;