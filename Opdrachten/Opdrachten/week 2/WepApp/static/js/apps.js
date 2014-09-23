var App = App || {};

(function(){


App.mycontent = {
	movies: [{
		title: "The Matrix",
		releasedate: "2000",
		cover: "cover.jpg"
	}],

	about: {
		title: "Over deze app",
		description: "Deze app is zo awesome dat je hoofd ontploft!"
	}
}


App.router = {
	init: function(){
		routie({
		    'movies': function() {
		    	console.log("Dit is de movie pagina");
		    	App.sections.movies()
		    	App.sections.toggle('movies');


		    },
		    'about': function() {
		    	console.log("Dit is de about pagina");
		    	var aboutdata = document.getElementById('aboutdata');
		    	App.sections.toggle('about');
		    },

		    '*' : function() {}
		});
	}
}

App.sections = {

	init: function() {
		this.movies();
		this.about();
// removeClassActiveFromSections: function() {
//         var allSections = document.getElementsByTagName('section');

//         for(var i = 0; i < allSections.length; i++) {
//             allSections[i].classList.remove('active');
//         }
// 	},


	},



	movies: function() {
		console.log('moviessection');
		Transparency.render(document.getElementById('movies'), App.mycontent.movies[0]);
	},

	about: function() {
		console.log('aboutsection');
		Transparency.render(document.getElementById('about'), App.mycontent.about);


	},


toggle: function(section) {
			// get all head sections
			var sections = app.utils.getAllElements('#content>section');
			// loop through sections and hide them
			for(i=0; i<sections.length; i++) {
				sections[i].classList.remove('active');
			}
			// show the current section by add class util function
			if (!document.querySelector(section).classList.contains('active')) {
			   app.utils.addClass(section, 'active');
			}
		}
	


}

App.controller = function(){

}

App.router.init();
App.sections.init();

console.log("ik werk nog");
})();