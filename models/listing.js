const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	accountEmail: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
	expired: { type: Boolean, default: false, required: true },
	quantity: { type: Number },
	unit: { type: String },
	description: { type: String },
	timePosted: { type: Date, default: Date.now },
	filePath: { type: String }
});

module.exports = mongoose.model('Listing', ListingSchema);
