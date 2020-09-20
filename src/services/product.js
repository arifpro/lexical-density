const Product = require('../models/Product');

// create
module.exports.createProduct = async product => {
	return Product.create(product);
};

// read, update, delete
module.exports.productById = async productId => {
	return Product.findById(productId);
};
