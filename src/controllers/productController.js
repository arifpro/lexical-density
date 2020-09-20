const _promise    =   require('../helpers/simpleAsync');
const _log    =   require('../utils/logger');
const  {createResponse}   =   require('../utils/responseGenerate');
const {createProduct, productById}     =   require('../services/product');
const Product = require('../models/Product');

// create data
module.exports.createProduct = async (req, res, next) => {
	const [err, product] = await _promise(createProduct(req.body));
	if (err) {
		return res.json(createResponse(null, 'Product creation failed', true, null));
	}
	return res.json(createResponse(product, 'Product successfully created', false, null));
};

// get single data by id
module.exports.getProductById = async (req, res) => {
	const [err, product] = await _promise(productById(req.params.id));
	if (product === null) {
		return res.json(createResponse(null, 'Product is not found!', true, null));
	}
	return res.json(createResponse(product, 'This is the product', false, null));
};

// update single data
module.exports.updateProductById = async(req, res) => {
	const [err, product] = await _promise(productById(req.params.id));
	if (product === null) {
		return res.json(createResponse(null, 'Product is not found!', true, null));
	}
	Object.assign(product, req.body);
	return res.json(createResponse(product, 'Product successfully updated', false, null));
};

// delete single data
module.exports.deleteProductById = async(req, res) => {
	const [err, product] = await _promise(productById(req.params.id));
	if (product === null) {
		return res.json(createResponse(null, 'Product is not found!', true, null));
	}
	await product.remove();
	return res.json(createResponse(true, 'Product successfully deleted', false, null));
};
