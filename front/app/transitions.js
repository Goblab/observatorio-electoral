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
		this.fromRoute('index'),
		this.toRoute('about'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('contact'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);


	this.transition(
		this.fromRoute('about'),
		this.toRoute('contact'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('contact'),
		this.toRoute('reports'),
		this.use('crossFade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('crossFade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('about'),
		this.toRoute('reports'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('country'),
		this.toRoute('reports'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);

	this.transition(
		this.fromRoute('election'),
		this.toRoute('reports'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);


	this.transition(
		this.fromRoute('election'),
		this.toRoute('country'),
		this.use('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('fade',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
	);


	this.transition(
		this.hasClass('liquid-modal'),

		// this makes our rule apply when the liquid-if transitions to the
		// true state.
		this.toValue(true),
		this.use('toLeft',  {duration: 800, delay: 0, easing: [ 0.7,0,0.3,1 ]}),
		this.reverse('toRight',  {duration: 800, delay: 400, easing: [ 0.7,0,0.3,1 ]})
    );

    this.transition(
	  this.childOf('.report-content'),
	  this.use('fade',  {duration: 800, delay: 0, easing: [ 0.7,0,0.3,1 ]})
	);



	this.transition(
	  this.childOf('#liquid-country-name'),
	  this.use('fade',  {duration: 800, delay: 0, easing: [ 0.7,0,0.3,1 ]})
	);
};