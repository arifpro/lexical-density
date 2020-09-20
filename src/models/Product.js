const mongoose      =   require('mongoose');
const {Schema}      =   mongoose;
mongoose.Promise    =   global.Promise;

const productSchema    =   new Schema ({
	name: {
		type: String,
		required: 'Product name is required',
		trim: true
	},
	id: {
		type: String,
		unique: true,
		required: true,
		trim: true
	},
	price: {
		type: Number,
		required: true,
		trim: true
	},
	image: {
		type: String,
		required: true,
		trim: true
	}
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);