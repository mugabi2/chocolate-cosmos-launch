// $("#login-button").click(function(event){
// 		 event.preventDefault();
//
// 	 $('form').fadeOut(500);
// 	 $('.wrapper').addClass('form-success');
// });

// scripts.js custom js file
// $(document).ready(function () {
// 	google.maps.event.addDomListener(window, 'load', initialize);
// });
//
// function initialize() {
// 	 var input = document.getElementById('userLocationsu');
// 	 var autocomplete = new google.maps.places.Autocomplete(input);
// }

auth.onAuthStateChanged(user=>{
          console.log(user.uid);
	console.log(55555,cred);
  if(user){

		  console.log("in in in in in");
}else {
  console.log("loged out");
}
})


// Confirm the link is a sign-in with email link.
if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  var email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  firebase.auth().signInWithEmailLink(email, window.location.href)
    .then(function(result) {
			console.log("email:"+ email);
			console.log("success success");
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch(function(error) {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
