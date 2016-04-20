$(function() {
	$("a.email").click(function() {
		event.preventDefault();
		var decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19rWwnWAAgB4wwSSpAP6qdjxjtmxyy3BKyUZz2ETk0/+yfrQex46CHF", "let's meet for coffee");
		var email = decrypted.toString(CryptoJS.enc.Utf8);
		var subject = "Hi, let's meet for coffee!";
		window.location = 'mailto:' + email + '?subject=' + subject;
	});
});
