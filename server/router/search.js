const express = require('express');
const filesData = require('../db/files')

const router = express.Router();

router.post('/complete', (req, res) => {
  const { text } = req.body
  const data = [...filesData]
    .filter(file => file.name.indexOf(text) !== -1)
    .map(it => it.name)
  res.send(data)
})

router.post('/', (req, res) => {
  const { text } = req.body
  const data = [...filesData]
    .filter(file => file.name.indexOf(text) !== -1)
  res.send(data)
});

module.exports = router;
