const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const cat = await Cat.getAll();
    console.log('cat', cat);

    res.json(cat);
  });

// line 7????
