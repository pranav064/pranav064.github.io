// Your Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get auth reference
const auth = firebase.auth();

// Sign Up function
function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Account created successfully!");
            window.location.href = "teacher-dashboard.html"; // Redirect to dashboard
        })
        .catch(error => {
            alert(error.message);
        });
}

// Login function
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login successful!");
            window.location.href = "teacher-dashboard.html";
        })
        .catch(error => {
            alert(error.message);
        });
}
