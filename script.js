const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const statusMessage = document.getElementById("status-message");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  statusMessage.textContent = "Logging in...";
  statusMessage.className = "status-message";

  auth.signInWithEmailAndPassword(email, password)
    .then(function(userCredential) {
      statusMessage.textContent = "Welcome, " + userCredential.user.email + "!";
      statusMessage.className = "status-message success";
    })
    .catch(function(error) {
      statusMessage.textContent = error.message;
      statusMessage.className = "status-message error";
    });
});
