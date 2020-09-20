const router    =   require('express').Router();
const wordController    =   require('./controllers/wordController');
const productController    =   require('./controllers/productController');

router.get('/', (req, res) => res.json({data: 'Hello Router'}));
router.post('/words', (req, res) => res.json({data: 'Hello Router'}));
router.post('/complexity', wordController.getComplexity);

// CRUD (product)
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.getProductById);
router.patch('/products/:id', productController.updateProductById);
router.delete('/products/:id', productController.deleteProductById);

module.exports = router;