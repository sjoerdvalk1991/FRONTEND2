
// ----------------------------------------------------- //
// APP JS DEELTOETS 1 - SJOERD VALK
// ----------------------------------------------------- //

// De namespace zorgt ervoor dat je geen conflicten krijgt met eventuele andere javascript bestanden met dezelfde soort objecten.

var APP = APP || {};

(function() {
	APP.controller = {
		init: function() {
			console.log ('kickoff app');
			APP.router.init(); // start de init methode van het router object
			APP.sections.init(); // start de init methode van het sections object
		}
	}


	APP.moviecontent = {
		// DATA OBJECT MET 2 modules
		about: {
			title: "About this app",
			description: "All of the content on this app and the website has been requested directly by young people.  The Your Questions are real questions from real young people as are the words in the Sextionary – and therefore we believe they are valid aspects of the site."
		},
		movies: [
			{
				title: "Shawshank Redemption",
				releaseDate: "14 October 1994",
				description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
				cover: "images/shawshank-redemption.jpg"
			},
			{
				title: "The Godfather",
				releaseDate: "24 March 1972",
				description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
				cover: "images/the-godfather.jpg"
			},
			{
				title: "Pulp Fiction",
				releaseDate: "14 October 1994",
				description:"The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
				cover: "images/pulp-fiction.jpg"
			},
			{
				title: "The Dark Knight",
				releaseDate: "18 July 2008",
				description:"When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
				cover: "images/the-dark-knight.jpg"
			}
		]
	}


	APP.router = {
		init: function() {
			console.log("kickoff router"); // runs router function to initialize hashes
	
			routie({
				'about': function() {
					APP.sections.toggle('section[data-route="about"]'); // start de toggle met de geselecteerde section
					console.log('about pagina geladen');
				},
				'movies': function() {
					APP.sections.toggle('section[data-route="movies"]'); // start de toggle met de geselecteerde section
					console.log('moviespagina geladen');
				}
			});
		}
	}

	APP.sections = {
		init: function() {
			console.log('kickoff sections');
			this.about(); // kickoff about section
			this.movies(); // kickoff movies section
		},
		about: function() {
			// selecteer de juiste section in de html als variabele
			var aboutSection = document.querySelector('section[data-route="about"]');
				// transparancy wordt aangeroepen om de data te koppelen aan de section in de html
			Transparency.render(aboutSection, APP.moviecontent.about) 
		},
		movies: function() {
			 //selecteer de juiste section in de html als variabele
			var moviesSection = document.querySelector('section[data-route="movies"]');
			// transparancy wordt aangeroepen om de data te koppelen aan de section in de html
			Transparency.render(moviesSection, APP.moviecontent.movies, {
				cover: {
			// Dit zorgt ervoor dat de waarde van cover in het src="" attribuut terecht komt.
					src: function() {
						return this.cover;
				    }
			}
			});
		},
		toggle: function(section) {
			// voegt alle sections in de #content toe aan deze variabele
			var sections = document.querySelectorAll('#content section');
			// Loopt door alle sections in de HTML, daar wordt bij alle sections de class 'active' verwijderd
			for(i=0; i<sections.length; i++) {
				sections[i].classList.remove('active');
			}
			// show the current section by add class util function
			if (!document.querySelector(section).classList.contains('active')) {
			    document.querySelector(section).classList.add('active');
			}
		}
	}


	APP.controller.init(); // initialiseer de app - start de app

})();