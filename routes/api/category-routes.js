const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({ include: [{ model: Product }] })
    .then(categoryData => { res.json(categoryData) })
    .catch(err => { res.status(500).json(err) })
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, { include: [{ model: Product }] })
    .then(categoryData => { res.json(categoryData) })
    .catch(err => { res.status(500).json(err) })
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then(newCategory => { res.json(newCategory) })
    .catch(err => { res.status(500).json(err) })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, { where: { id: req.params.id } })
    .then(updatedId => { res.json(updatedId) })
    .catch(err => { res.status(500).json(err) })
});

router.delete('/:id', (req, res) => {
  Category.destroy({ where: { id: req.params.id } })

    .then(updatedId => { res.json(updatedId) })
    .catch(err => { res.status(500).json(err) })
});

module.exports = router;
