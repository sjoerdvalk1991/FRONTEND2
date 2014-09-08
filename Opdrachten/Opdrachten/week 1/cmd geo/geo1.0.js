

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
	CMDGEO.debug.debugMessage("Controleer of GPS beschikbaar is...");
    ET.addListener(GPS_AVAILABLE, _start_interval);
    ET.addListener(GPS_UNAVAILABLE, function(){debug_message('GPS is niet beschikbaar.')});
    (geo_position_js.init())?ET.fire(GPS_AVAILABLE):ET.fire(GPS_UNAVAILABLE);

	}

}

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

}

	CMDGEO.map = {

		generateMap: function () {


		},

		isNumber: function() {


		},

		updatePosition: function() {


		}

}

	CMDGEO.debug = {

		geoErrorHandler: function(){


		},

		debugMessage: function(){


		},

		setCustomDebugging: function(){


		}

}


})