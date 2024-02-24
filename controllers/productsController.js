import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Product List.'});
});

router.get('/:id', (req, res) => {
    res.json({ message: req.params.id });
});

export default router;