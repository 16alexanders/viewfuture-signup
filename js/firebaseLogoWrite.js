$(document).ready(function() {
	$("#submitButton").click(function() {
		var emailValue = $("#mail").val();
		var domain = emailValue.substr(emailValue.indexOf("@") + 1);
		var logoURL = "https://logo.clearbit.com/" + domain;
		console.log(emailValue);
		console.log(domain);
		console.log(logoURL);
		console.log(firebase);
		var configRef = firebase.database().ref('controllers/vgc123/config');
		configRef.update({
			'/logoImage': logoURL
		});
		window.location.replace("./success/index.html")
	});
});