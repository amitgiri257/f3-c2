var name1 = document.getElementById("name").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
var confirmPass = document.getElementById("confirm-pass").value;
const btn = document.getElementById("btn");
const loginForm = document.getElementById("login-form");
const signup = document.getElementById("sign-up");
const page2 = document.getElementById("after-click");
const logout = document.getElementById("btn-logout");

const accessToken = new Uint8Array(16);
crypto.getRandomValues(accessToken);

const user = {
  name: name1,
  email: email,
  password: password,
};
console.log(user);

// Store user details and access token in local storage
btn.addEventListener("click", function () {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("accessToken", Array.from(accessToken).join(","));
  btn.href="./profile.html";

  if (window.location.href.includes("signup.html")) {
    window.location.href = "profile.html";
  } else {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      var name1 = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
      var confirmPass = document.getElementById("confirm-pass").value;

      if (password === confirmPass) {
        const accessToken = accessTokenArray;
        const user = { username, email, password, accessToken };
        localStorage.setItem("user", JSON.stringify(user));
        error.textContent = "Signup successful. Redirecting...";
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 2000);
      } else {
        error.textContent = "Please provide correct password.";
      }
    });
  }

  const page3 = document.getElementsByClassName("after-click");
  const data = document.createElement("form");
  data.class = "form";
  data.innerHTML = `
<h2>Profile</h2>
<img src="./sources/Vector.svg" alt="">
<img src="./sources/Vector (1).svg" alt="">
<div class="fullname">Full Name : ${name1}</div>
<div class="email">Your Email : ${email}</div>
<div class="token">Your Token : ${accessToken}</div>
<div class="password">Your password : ${password}</div>
<button type="submit" id="btn-logout">LOGOUT</button>
`;
  page3.appendChild(data);
  // Retrieve user details and access token from local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedAccessToken = localStorage.getItem("accessToken");

  // To convert the stored access token back to a byte array
  const accessTokenArray = storedAccessToken.split(",").map(Number);
  const accessToken = new Uint8Array(accessTokenArray);
});

logout.addEventListener("click", function () {
  page2.style.display = "none";
  loginForm.style.display = "block";
  signup.style.display = "block";
  localStorage.clear("user.value", JSON.stringify(user));
  localStorage.clear("accessToken", Array.from(accessToken).join(","));
});
