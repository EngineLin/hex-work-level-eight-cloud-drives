const express = require('express');
const filesData = require('../db/files')

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(filesData)
});

module.exports = router;
