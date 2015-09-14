export default function(){
 	this.transition(
		this.fromRoute('index'),
		this.toRoute('election'),
		this.use('explode', {
	      matchBy: 'post-id',
	      use: ['flyTo', {duration: 800, delay: 250, easing: [ 0.7,0,0.3,1 ]} ]
	    }, {
	      use: ['toLeft', {duration: 800, easing: [ 0.7,0,0.3,1 ]} ]
	    }),
	    this.reverse('explode', {
	      matchBy: 'post-id',
	      use: ['flyTo', {duration: 800, delay: 250, easing: [ 0.7,0,0.3,1 ]} ]
	    }, {
	      use: ['toRight', {duration: 800, easing: [ 0.7,0,0.3,1 ]} ]
	    })
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('country'),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('election'),
		this.toRoute('country'),
		this.use('explode', {
	      matchBy: 'post-id',
	      use: ['flyTo', {duration: 800, delay: 250, easing: [ 0.7,0,0.3,1 ]} ]
	    }, {
	      use: ['toLeft', {duration: 800, easing: [ 0.7,0,0.3,1 ]} ]
	    }),
	    this.reverse('explode', {
	      matchBy: 'post-id',
	      use: ['flyTo', {duration: 800, delay: 250, easing: [ 0.7,0,0.3,1 ]} ]
	    }, {
	      use: ['toRight', {duration: 800, easing: [ 0.7,0,0.3,1 ]} ]
	    })
	);

	this.transition(
		this.hasClass('country-menu'),

		// this makes our rule apply when the liquid-if transitions to the
		// true state.
		this.toValue(true),
		this.use('toLeft',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	  );

	this.transition(
		this.hasClass('action-bar'),

		// this makes our rule apply when the liquid-if transitions to the
		// true state.
		this.toValue(true),
		this.use('toUp',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toDown',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	  );
};