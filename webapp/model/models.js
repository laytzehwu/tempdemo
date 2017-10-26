sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createAPIModel: function(city) {
		    
		    
		    var oModel = new JSONModel();
			oModel.loadData("/openweathermap/data/2.5/weather?appid=38d8ee7405df4c4176a125778279dff9&q=" + city+"&units=metric", null, false);
		    
			return oModel;
		}
	};
});