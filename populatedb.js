#! /usr/bin/env node

const async = require('async');
const Account = require('./models/account');
const Listing = require('./models/listing');
require('dotenv').config();

const mongoose = require('mongoose');
const mongodb = process.env.MONGO_URI;
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

let accounts = [];
let listings = [];

function accountCreate(email, password, firstName, lastName, bio, cb) {
	let account = new Account({
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
		bio: bio
	});
	account.save((err, account) => {
		if (err) {
			cb(err, null);
			return;
		}
		accounts.push(account);
		console.log(account);
		cb(null, account);
	});
}

function listingCreate(name, price, accountEmail, expired, quantity, unit, description, timePosted, filePath, cb) {
	let listing = new Listing({
		name: name,
		price: price,
		accountEmail: accountEmail,
		expired: expired,
		quantity: quantity,
		unit: unit,
		description: description,
		timePosted: timePosted,
		filePath: filePath
	});
	listing.save((err, listing) => {
		if (err) {
			cb(err, null);
			return;
		}
		listings.push(listing);
		console.log(listing);
		cb(null, listing);
	});
}

function createAccounts(cb) {
	async.series([
		function(callback) {
			accountCreate('a@a.com', 'password', 'John', 'Doe', 'I am a test account.', callback);
		},
		function(callback) {
			accountCreate('b@b.com', 'password', 'Jane', 'Doe', 'I am a test account.', callback);
		},
		function(callback) {
			accountCreate('c@c.com', 'password', 'John', 'Doe', 'I am a test account.', callback);
		}
	], cb);
}

function createListings(cb) {
	async.series([
		function(callback) {
			listingCreate('Test Listing 1', 100, accounts[0].email, false, 1, 'unit', 'This is a test listing.', new Date(), '', callback);
		},
		function(callback) {
			listingCreate('Test Listing 2', 100, accounts[1].email, false, 1, 'unit', 'This is a test listing.', new Date(), '', callback);
		},
		function(callback) {
			listingCreate('Test Listing 3', 100, accounts[2].email, false, 1, 'unit', 'This is a test listing.', new Date(), '', callback);
		},
		function(callback) {
			listingCreate('Test Listing 4', 100, accounts[0].email, false, 1, 'unit', 'This is a test listing.', new Date(), '', callback);
		}
	], cb);
}

async.series([
	createAccounts,
	createListings
], (err, results) => {
	if (err) {
		return console.error(err);
	} else {
		console.log(results);
	}
	db.close();
});
