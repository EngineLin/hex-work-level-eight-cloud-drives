const express = require('express');
const userInfoData = require('../db/user-info')

const router = express.Router();

router.get('/', (req, res) => {
  res.send(userInfoData);
});

module.exports = router;
