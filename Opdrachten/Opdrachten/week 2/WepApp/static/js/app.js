// ----------------------------------------------------- //
// APP JS DEELTOETS 1 - RUBEN KUIPERS
// ----------------------------------------------------- //

var app = app || {};

(function() {
	app.controller = {
		init: function() {
			console.log ('kickoff app');
			app.router.init(); // kickoff router
			app.sections.init(); // kickoff sections
		}
	};

	app.router = {
		init: function() {
			console.log("kickoff router");
			app.router.fire(); // runs router function to initialize hashes
		},
		fire: function() {
			routie({
				'about about': function() {
					app.sections.toggle('section[data-route="about"]'); // runs section toggle function and gives element as parameter
				},
				'movies movies': function() {
					app.sections.toggle('section[data-route="movies"]'); // runs section toggle function and gives element as parameter
				}
			});
		}
	};

	app.sections = {
		init: function() {
			console.log('kickoff sections');
			app.sections.about(); // kickoff about section
			app.sections.movies(); // kickoff movies section
		},
		about: function() {
			// get about section with util
			var aboutSection = app.utils.getFirstElement('section[data-route="about"]');
			// transparancy call to fill the about section
			Transparency.render(aboutSection, app.moviecontent.about, {
				description: {
					html: function() {
						return this.description; // render html tags also instead of plain text
					}
				}
			});
		},
		movies: function() {
			var moviesSection = app.utils.getFirstElement('section[data-route="movies"]>article');
			// transparancy call to fill the movies section
			Transparency.render(moviesSection, app.moviecontent.movies, {
				cover: {
					src: function() {
						return this.cover; // fill src field of link with the cover value of the data object
				    }
				},
				description: {
					html: function() {
						return this.description; // render html tags also instead of plain text
					}
				}
			});
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
	};

	app.utils = {
		// some easy util objects
		init: function() {
			console.log("kickoff utils object");
		},
		getFirstElement: function(element) {
			return document.querySelector(element);
		},
		getAllElements: function(element) {
			return document.querySelectorAll(element);
		},
		toggleClass: function(element, classname) {
			return document.querySelector(element).classList.toggle(classname);
		},
		addClass: function(element, classname) {
			return document.querySelector(element).classList.add(classname);
		},
		removeClass: function(element, classname) {
			return document.querySelector(element).classList.remove(classname);
		}
	};

	app.moviecontent = {
		// core data object
		about: {
			title: "About this app",
			description: "<p>Cities fall but they are rebuilt. heroes die but they are remembered. the man likes to play chess; let's get him some rocks. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. bruce... i'm god. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all. rehabilitated? well, now let me see. you know, i don't have any idea what that means. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. rehabilitated? well, now let me see. you know, i don't have any idea what that means. cities fall but they are rebuilt. heroes die but they are remembered. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all.</p><p>I did the same thing to gandhi, he didn't eat for three weeks. bruce... i'm god. cities fall but they are rebuilt. heroes die but they are remembered. i once heard a wise man say there are no perfect men. only perfect intentions. cities fall but they are rebuilt. heroes die but they are remembered. boxing is about respect. getting it for yourself, and taking it away from the other guy. well, what is it today? more spelunking? let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. bruce... i'm god. well, what is it today? more spelunking? it only took me six days. same time it took the lord to make the world. i did the same thing to gandhi, he didn't eat for three weeks.</p><p>Let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. boxing is about respect. getting it for yourself, and taking it away from the other guy. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. you measure yourself by the people who measure themselves by you. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. you measure yourself by the people who measure themselves by you. you measure yourself by the people who measure themselves by you. that tall drink of water with the silver spoon up his ass. i once heard a wise man say there are no perfect men. only perfect intentions. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. boxing is about respect. getting it for yourself, and taking it away from the other guy.</p><p>That tall drink of water with the silver spoon up his ass. well, what is it today? more spelunking? i now issue a new commandment: thou shalt do the dance. let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. i did the same thing to gandhi, he didn't eat for three weeks. the man likes to play chess; let's get him some rocks. i now issue a new commandment: thou shalt do the dance. i now issue a new commandment: thou shalt do the dance. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. i don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. that tall drink of water with the silver spoon up his ass. it only took me six days. same time it took the lord to make the world. </p>"
		},
		movies: [
			{
				title: "Shawshank Redemption",
				releaseDate: "14 October 1994",
				description:"<p>Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.</p>",
				cover: "/WebApp/assets/images/shawshank-redemption.jpg"
			},
			{
				title: "The Godfather",
				releaseDate: "24 March 1972",
				description:"<p>The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.</p>",
				cover: "/WebApp/assets/images/the-godfather.jpg"
			},
			{
				title: "Pulp Fiction",
				releaseDate: "14 October 1994",
				description:"<p>The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.</p>",
				cover: "/WebApp/assets/images/pulp-fiction.jpg"
			},
			{
				title: "The Dark Knight",
				releaseDate: "18 July 2008",
				description:"<p>When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.</p>",
				cover: "/WebApp/assets/images/the-dark-knight.jpg"
			}
		]
	};

	app.controller.init(); // initialize app - fire the controller

})();