function registerUser() {
  event.preventDefault();
  console.log("insider register");
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (!email || !password || !confirmPassword) {
    alert("⚠️ All fields are required!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("❌ Passwords do not match!");
    return false;
  }

  // get existing users
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  if (users.find(u => u.email === email)) {
    alert("⚠️ User already registered!");
    return false;
  }

  // create new user
  const newUser = { email, password, date: new Date().toLocaleString() };
  users.push(newUser);

  // save users back
  localStorage.setItem("users", JSON.stringify(users));

  alert("✅ Registered successfully!");
  window.location.href = "index.html"; 

  return true;
}


function loginUser() {
  if (event) event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // get users from localStorage
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // check if user exists
  const validUser = users.find(u => u.email === email && u.password === password);

  if (validUser) {
    // alert("✅ Login successful!");
    // store current logged in user
    localStorage.setItem("currentUser", JSON.stringify(validUser));
    window.location.href = "index.html";

  } else {
    alert("❌ Invalid email or password. Please try again or register.");
  }
}


function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}