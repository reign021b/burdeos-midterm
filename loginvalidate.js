document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault()
  
    let username = document.getElementById('lusername').value;
    let password = document.getElementById('lpassword').value;
  
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let validuser = /^[a-zA-Z0-9_]{4,20}$/;
  
    try {
  
      if(username == "" || password == "") {
        throw new Error("Username and password are required.");
      }
  
      if(username.length < 6) {
        throw new Error("Username must be at least 6 characters long.");
      }
  
      if(password.length < 8) {
        throw new Error("Password must be at least 8 characters long.");
      }
  
      if (!validuser.test(username)) {
        alert('Please enter a valid username');
  
      return false;
      }

      alert('Logged in Successfully');
    }
    catch (error) {
      alert(error.message);
    }
    finally {
  
    }
  });
  