// signup
let currentUser;
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value
  const password = signupForm['signup-password'].value
  const username = signupForm['signup-username'].value

  console.log(email, password)
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    const newUser = userCredential.user;
    addNewUser(newUser, username)
    console.log(newUser,` has been logged in!`)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
});

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  
  auth.signOut().then(() => {
    // Sign-out successful.
    console.log("User signed out!")
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
});