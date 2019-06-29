let signUpAccount = function(email, password) {
  // Send email and password to firebase to create profile
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Add account to database
      user = firebase.auth().currentUser;
      db.collection("users")
        .doc(user.uid)
        .set({
          email: email
        })
        .then(function() {
          console.log("User added to database!");
        })
        .catch(function(error) {
          console.log(error);
        });
    })
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

let login = function(email, password) {
  // Send email and password to firebase to log in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};
