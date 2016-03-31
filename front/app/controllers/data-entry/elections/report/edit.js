import Ember from 'ember';

export default Ember.Controller.extend({
	mediumEditorOptions: {
	  "buttons": ['bold', 'italic', 'underline', 'anchor', 'header1', 'header2', 'unorderedlist', 'orderedlist'],
	  "checkLinkFormat": true,
	  "forcePlainText": true
	}	
});
