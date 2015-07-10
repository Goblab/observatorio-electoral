/**
* Formula.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	election: {
  		model: 'election',
  	},

    politicalForce: {
      model: 'politicalForce',
    },

  	votes: 'string',
  	percent: 'string',
  	president: 'json',
  	vicepresident: 'json',

  	assemblyman: 'json',
  	diputies: 'json',
  	senators: 'json',

  	proposal: 'string',
  	positiveVotes: 'json',
  	negativeVotes: 'json',

  	provinceStatuses: {
  		collection: 'provinceStatus',
  		via: 'formula',
  	},
  }
};

