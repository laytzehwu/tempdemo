sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("tempdemowebide3.controller.weather", {
		press: function(evt) {
			var city = evt.getSource().data("mydata");
			var link = "http://openweathermap.org/city/" + city;
			window.open(link, "_blank");
		}
	});
});