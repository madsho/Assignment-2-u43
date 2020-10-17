// create needed constants
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const ageInput = document.querySelector ('#enterage')
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');
const birth = document.querySelector("#birthd");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
const age = document.querySelector(".age");

// Stop the form from submitting when a button is pressed
form.addEventListener('submit', function(e) {
    e.preventDefault();
  });

  // run function when the 'Say hello' button is clicked
submitBtn.addEventListener('click', function() {
    // store the entered name in web storage
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem("infoAge", ageInput.value);
    localStorage.setItem("birthday", birth.value);
    localStorage.setItem("usern", username.value);
    localStorage.setItem("passw", password.value);
    // run nameDisplayCheck() to sort out displaying the
    // personalized greetings and updating the form display
    nameDisplayCheck();
  });

  // run function when the 'Forget' button is clicked
forgetBtn.addEventListener('click', function() {
    // Remove the stored name from web storage
    localStorage.removeItem('name');
    localStorage.removeItem('infoAge');
    localStorage.removeItem("birthday");
    localStorage.removeItem("usern");
    localStorage.removeItem("passw");
    // run nameDisplayCheck() to sort out displaying the
    // generic greeting again and updating the form display
    nameDisplayCheck();
  });

  // define the nameDisplayCheck() function
function nameDisplayCheck() {
    // check whether the 'name' data item is stored in web Storage
    if(localStorage.getItem('name' ) && localStorage.getItem("infoAge") && localStorage.getItem ("birthday") && localStorage.getItem ("usern") && localStorage.getItem ("passw")) {
      // If it is, display personalized greeting
      let name = localStorage.getItem('name');
      let infoAge = localStorage.getItem("infoAge");
      let birthday = localStorage.getItem ("birthday");
      let usern = localStorage.getItem ("usern");
      let passw = localStorage.getItem ("passw");
      h1.textContent = 'Welcome, ' + name;
      personalGreeting.textContent = 'Welcome to our website, ' + name + '! We hope you have fun while you are here.';
      age.textContent = "Your personal details are: " + "age, " + infoAge + ", Birthday: " + birthday + ", Your username: " + usern + ", Your password: " + passw;
      // hide the 'remember' part of the form and show the 'forget' part
      forgetDiv.style.display = 'block';
      rememberDiv.style.display = 'none';
    } else {
      // if not, display generic greeting
      h1.textContent = 'Welcome to our website ';
      personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
      age.textContent = "Your personal details will be displayed here!"
      // hide the 'forget' part of the form and show the 'remember' part
      forgetDiv.style.display = 'none';
      rememberDiv.style.display = 'block';
    }
  }
  document.body.onload = nameDisplayCheck;