/**
* PoliticalForce.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
      type: 'string',
      columnName: 'nombre',
    },
    
  	initials: {
      type: 'string',
      columnName: 'sigla',
    },

    color: {
      type: 'string',
      columnName: 'color',
    },  

    history: 'string',

    logo: {
      model: 'asset',
    },  

    alignment: {
      model: 'PoliticalAline'
    },   
     
    country: {
      model: 'country'
    },      
  }
};