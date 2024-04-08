const jwt = require('jsonwebtoken');
const config = require('../env/config');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  jwt.verify(token, config.secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.body.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
