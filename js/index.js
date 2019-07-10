$("#signUp").submit(function(event) {
  // Prevent page reloading
  event.preventDefault();

  // Get user email and password
  let email = $("#signUp-email")
    .val()
    .trim();
  let password = $("#signUp-password")
    .val()
    .trim();

  // Create account
  signUpAccount(email, password);
});

// Sign in to an existing account
$("#signIn").submit(function(event) {
  // Prevent page reloading
  event.preventDefault();

  // Get user email and password
  let email = $("#signIn-email")
    .val()
    .trim();
  let password = $("#signIn-password")
    .val()
    .trim();

  login(email, password);
});

// Handle login status
firebase.auth().onAuthStateChanged(function(user) {
  let status = $("#login-status");
  if (user) {
    status.css("color", "green");
    status.text(user.email);
  } else {
    status.css("color", "red");
    status.text("Not Logged In");
  }
});

// Logout
$("#logout").submit(function(event) {
  event.preventDefault();

  firebase
    .auth()
    .signOut()
    .then(function() {
      // User logged out
    })
    .catch(function(error) {
      alert("error logging out");
      console.log(error);
    });
});
