const express = require('express');
const router = express.Router();
const Items = require('../Models/Items');

// Middleware to fetch an item by ID
async function getItem(req, res, next) {
    let item;
    try {
        item = await Items.findById(req.params.id);
        if (item === null) {
            return res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    res.item = item;
    next();
}

// POST a new item
router.post('/', async (req, res) => {
    try {
        const item = new Items(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Items.find();
        res.json(items);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET an item by ID
router.get('/:id', getItem, async (req, res) => {
    res.json(res.item);
});

// Update an item by ID
router.put('/:id', getItem, async (req, res) => {
    try {
        if (req.body.ProductName !== undefined) {
            res.item.ProductName = req.body.ProductName;
        }
        if (req.body.Brand !== undefined) {
            res.item.Brand = req.body.Brand;
        }
        if (req.body.Specifications !== undefined) {
            res.item.Specifications = req.body.Specifications;
        }
        if (req.body.StockQuantity !== undefined) {
            res.item.StockQuantity = req.body.StockQuantity;
        }
        if (req.body.Price !== undefined) {
            res.item.Price = req.body.Price;
        }
        if (req.body.Category !== undefined) {
            res.item.category = req.body.category;
        }
        const updatedItem = await res.item.save();
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET items by category
router.get('/item/:category', async (req, res) => {
    try {
        console.log(req.params.category);
        const category = String(req.params.category);

        const items = await Items.find({ category: category });
        if (!items || items.length === 0) {
            return res.status(404).json({ message: 'Items not found' });
        }
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an item by ID
router.delete('/:id', getItem, async (req, res) => {
    try {
        await res.item.deleteOne();
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
