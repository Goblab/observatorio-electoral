import DS from 'ember-data';

export default DS.Model.extend({
  	title: DS.attr('string'),
  	message: DS.attr('string'),  	
  	excerpt: DS.attr('string'),  	
  	published: DS.attr('boolean'),
  	createdAt: DS.attr('date'),
  	updatedAt: DS.attr('date'),
  	picture: DS.belongsTo('asset', {async: true}),
  	attachment: DS.belongsTo('asset', {async: true}),
});
