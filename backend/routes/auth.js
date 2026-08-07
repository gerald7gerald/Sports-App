const router = require('express').Router();
router.post('/register', (req, res) => res.json({ message: 'register stub' }));
router.post('/login', (req, res) => res.json({ message: 'login stub' }));
module.exports = router;