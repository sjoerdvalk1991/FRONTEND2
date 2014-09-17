

var CMDGEO = CMDGEO || {};

(function(){

		// Variable declaration
	var SANDBOX = "SANDBOX";
	var LINEAIR = "LINEAIR";
	var GPS_AVAILABLE = 'GPS_AVAILABLE';
	var GPS_UNAVAILABLE = 'GPS_UNAVAILABLE';
	var POSITION_UPDATED = 'POSITION_UPDATED';
	var REFRESH_RATE = 1000;
	var currentPosition = currentPositionMarker = customDebugging = debugId = map = interval =intervalCounter = updateMap = false;
	var locatieRij = markerRij = [];


CMDGEO.controller = {
	init: function () {
	cmdGeo.gps.init();
			cmdGeo.map.init();
			cmdGeo.debug.init();

	}

},

CMDGEO.gps = {

	startInterval: function () {


	},

	updatePosition: function () {


	},

	setPosition: function () {


	},

	checkLocations: function () {


	},

	calculateDistance: function () {


	}

},

	CMDGEO.map = {

		generateMap: function () {


		},

		isNumber: function() {


		},

		updatePosition: function() {


		}

};

cmdGeo.controller.init();




})();