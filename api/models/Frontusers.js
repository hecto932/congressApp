/**
 * Frontusers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt')

module.exports = {

  	attributes: {
  		name: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true
  		},
  		lastName: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true
  		},
  		cedula: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true,
  			unique: true
  		},
  		email: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true,
  			unique:true
  		},
  		password: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true
  		},
  		phone: {
  			type: 'string',
  			minLength: 3,
  			maxLength: 70,
  			required: true
  		},
  		university: {
  			type: 'string',
  			minLength: 10,
  			maxLength: 70,
  			null: true
  		},
  		school: {
  			type: 'string',
  			minLength: 10,
  			maxLength: 70,
  			null: true
  		},
  		rememberToken: {
  			type: 'string',
  			minLength: 10,
  			maxLength: 70,
  			null: true
  		}
  	},
  	beforeCreate: function(frontusers, cb){
  		bcrypt.hash(frontusers.password, SALT, function(err, hash){
  			if(err){
  				console.log(err)
  				cb(err)
  			}
  			else{
  				frontusers.password = hash
  				cb()
  			}
  		})
  	}
};

