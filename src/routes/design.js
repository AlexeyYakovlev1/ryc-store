const { Router } = require('express');
const { route } = require('./home');
const router = Router();

router.get('/', (req, res) => {
    res.render('design', {
        title: 'Дизайнерские товары',
        isDesign: true
    });
});

router.get('/:id', (req, res) => {
    res.render('design-product', {
        title: 'Дизайнерский товар'
    });
});

module.exports = router;