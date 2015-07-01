/**
* Candidate.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	person: {
  		model: 'person',
  	},

  	politicalForce: {
  		model: 'politicalForce',
  	},

  	election: {
  		model: 'election',
  	},

    charge: {
      model: 'charge',
    },

    comment: {
      type: 'string'
    }
  }
};