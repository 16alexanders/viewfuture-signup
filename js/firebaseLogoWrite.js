$( "#submitButton" ).click(function() {
 	var emailValue = $("#mail").val();
	var domain = emailValue.substr(emailValue.indexOf("@") + 1);
	console.log(domain);
	var logoURL = "https://logo.clearbit.com/" + domain;
	const functions = require('firebase-functions');
	var admin = require("firebase-admin");
	admin.initializeApp(functions.config().firebase);
	var configRef = admin.database().ref('controllers/vgc123/config');
	configRef.update( {"logoImage": logoURL} );
});


