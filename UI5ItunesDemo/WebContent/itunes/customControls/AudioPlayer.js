sap.ui.core.Control.extend("itunes.customControls.AudioPlayer", {
	metadata: {
		properties: {
			src: "string"
		}
	},
	setSrc: function(sValue) {
		this.setProperty("src", sValue);
	},
	renderer: function(oRm, oControl) {
		oRm.write("<audio controls='controls'");
		oRm.writeControlData(oControl);
		oRm.write(">");
		oRm.write("<source src='" + oControl.getSrc() + "' type='audio/mpeg'>");
		oRm.write("</audio>");
	}
});