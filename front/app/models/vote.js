import DS from 'ember-data';

export default DS.ModelFragment.extend({
	votes: DS.attr('string'),
	percent: DS.attr('string'),
	positions: DS.attr('string'),
});
