/**
 * Backusers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt')
var SALT = 10

module.exports = {

	attributes: {
		name: {
			type: 'string',
			minLength: 3,
			maxLength: 70,
			required: true
		},
		email: {
			type: 'email',
			minLength: 3,
			maxLength: 70,
			required: true,
			unique: true
		},
		password: {
			type: 'string',
			minLength: 6,
			maxLength: 70,
			required: true,
			unique: true
		},
		rememberToken: {
			type: 'string',
			minLength: 6,
			maxLength: 70,
			null: true
		}
  	},
  	beforeCreate: function(backusers, cb){
  		bcrypt.hash(backusers.password, SALT, function(err, hash){
  			if(err){
  				console.log(err)
  				cb(err)
  			}
  			else{
  				backusers.password = hash
  				cb()
  			}
  		})
  	}
};

