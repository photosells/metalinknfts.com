const firebaseConfig = {
    apiKey: "AIzaSyAtT3YaEQ2F-K7Bjka4ftYZ4ngwDmB9XS8",
    authDomain: "contactform-f4d3a.firebaseapp.com",
    databaseURL: "https://contactform-f4d3a-default-rtdb.firebaseio.com",
    projectId: "contactform-f4d3a",
    storageBucket: "contactform-f4d3a.appspot.com",
    messagingSenderId: "825358049249",
    appId: "1:825358049249:web:124c36d486ee7b8cb93ca0"
  };
  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var date = getElementVal("date");
    var password = getElementVal("password");
    var country = getElementVal("country");
  
    saveMessages(name, emailid, phone, date, password, country);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, phone, date, password, country) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      date: date,
      password: password,
      country: country,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  