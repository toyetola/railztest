const validator = (req, res, next) => {
    if (!req.body.street || req.body.street == "") {
        return res.status(400).json({ error: 'Request data incomplete' });
    }
    if (!req.body.city || req.body.city == "") {
        return res.status(400).json({ error: 'Request data incomplete' });
    }
    if (!req.body.state || req.body.state == "") {
        return res.status(400).json({ error: 'Request data incomplete' });
    }
    if (!req.body.country || req.body.country == "") {
        return res.status(400).json({ error: 'Request data incomplete' });
    }
    next
};

module.exports = validator