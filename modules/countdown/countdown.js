/* global Log, Module, moment */

Module.register("countdown",{

	// Module config defaults.
	defaults: {
		updateInterval: 1000,
		fadeSpeed: 0//4000
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	// Override dom generator.
	getDom: function() {
        //7/22
        var t = moment([2017,6,22,6,0,0]);
        var n = moment();
        
        // var months = t.diff(n,"months");
        // var days = t.diff(n,"days");
        // var hours = t.diff(n,"hours");
        // var minutes = t.diff(n,"minutes");
        // var seconds = t.diff(n,"seconds");
        var milli = t.diff(n,"milliseconds");
        var d = moment.duration(milli, "milliseconds")

        var months = moment.duration(d).months();
        var days = moment.duration(d).days();
        var hours = moment.duration(d).hours();
        var minutes = moment.duration(d).minutes();
        var seconds = moment.duration(d).seconds();

        var countdownText = "";
        if(months>0) countdownText += `${months} months, `;
        countdownText += `${days} days, ` +
            `${hours} hours, ` +
            `${minutes} minutes, ` +
            `and ${seconds} seconds until Turks and Caicos!`;

		var compliment = document.createTextNode(countdownText);
		var wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "thin medium bright";
		wrapper.appendChild(compliment);

		return wrapper;
	}


});
