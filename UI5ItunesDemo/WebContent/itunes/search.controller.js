sap.ui.controller("itunes.search", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf itunes.search
*/
	onInit: function() {
		var model = new sap.ui.model.json.JSONModel();
		var url = "https://itunes.apple.com/search?term=test&country=CH&media=music&entity=song&callback=?";

		model.loadData(url);
	 	this.getView().setModel(model);
	},
	
	 onSearch : function(oEvent) {
		 	var searchTerm = oEvent.getParameter("query");
		 	var url = "https://itunes.apple.com/search?term=" + searchTerm + 
		 			  "&country=CH&media=music&entity=song&callback=?";
		 	
		 	this.getView().getModel().loadData(url);
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf itunes.search
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf itunes.search
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf itunes.search
*/
//	onExit: function() {
//
//	}

});