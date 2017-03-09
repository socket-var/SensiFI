angular
	.module("SensiFI")
	.filter("formatDistance", formatDistance);


function _isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
function formatDistance() {
	return function (distance) {
		var numDistance, unit;
		if (distance && _isNumeric(distance)) {
			if (distance > 1) {
				numDistance = parseFloat(distance).toFixed(1);
				unit        = 'km';
			} else {
				numDistance = parseInt(distance * 1000, 10);
				unit        = 'm';
			}
			return numDistance + unit;
		} else {
			return "?";
		}
	};
}

