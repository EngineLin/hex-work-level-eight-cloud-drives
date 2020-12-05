const express = require('express');
const allFileIds = require('../db/all-files');
const filesData = require('../db/files');

const router = express.Router();

router.get('/main/:type', (req, res) => {
  const { type } = req.params;
  const _filesData = [...filesData];
  const files = [...allFileIds].map(id => _filesData.find(file => file.id === id));

  if (type === '0') {
    // Private
    const _data = files
      .filter(file => !file.trash)
      .filter(file => file.owner === 'Engine Lin');
    return res.send(_data)
  }
  if (type === '1') {
    // Private
    const _data = files.filter(file => !file.trash)
    return res.send(_data)
  }
  if (type === '2') {
    // Private
    const _data = files
      .filter(file => !file.trash)
      .filter(file => file.favorite);
    return res.send(_data)
  }
  if (type === '3') {
    // Private
    const _data = files.filter(file => file.trash);
    return res.send(_data)
  }
});

router.get('/file/:id', (req, res) => {
  const { id } = req.params;
  const target = [...filesData].find(file => file.id === parseInt(id));
  if (target.type === 0) {
    // Folder
    const _filesData = [...filesData];
    const files = target.content.map(id => _filesData.find(file => file.id === id));
    res.send({...target, content: files})
  }
  res.send(target)
});

router.post('/favorite', (req, res) => {
  const { id, favorite } = req.body;
  const targetIndex = [...filesData].findIndex(file => file.id === parseInt(id))
  if (targetIndex !== -1) {
    filesData[targetIndex].favorite = favorite;
    return res.send(true);
  }
  res.send(false);
});

module.exports = router;
