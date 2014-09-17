var APP = APP || {};

(function(){

	APP.controller = {
		init: function() {
		console.log('test');
		APP.router.init();
	}
},

	APP.mycontent = {
		movies: {
			
			title: "About this app",
			description: "description"

},
		about: {

			title: "About this app",
			description: "description"

		}



	},

	APP.router = {
		init: function() {
			routie({

		    '/movies': function() {
		    	Transparency.render(document.getElementById('[data-route=movies'), APP.mycontent.movies);
		    	console.log('testmovies');

		    },
		    '/about': function() {
		    	Transparency.render(document.getElementById('[data-route=about'), APP.mycontent.about);
		    	console.log('tests');
		    }
			});

		}

	}


APP.controller.init();


})();
