// $("#login-button").click(function(event){
// 		 event.preventDefault();
//
// 	 $('form').fadeOut(500);
// 	 $('.wrapper').addClass('form-success');
// });

// scripts.js custom js file
$(document).ready(function () {
	google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
	 var input = document.getElementById('userLocationsu');
	 var autocomplete = new google.maps.places.Autocomplete(input);
}
