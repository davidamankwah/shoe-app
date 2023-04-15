import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [signup, setSignup] = useState(false);
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    // Check if login credentials are valid
    if (username === signupUsername && password === signupPassword) {
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    const newUser = {
      signupUsername,
      signupEmail,
      signupPassword
    };
    try {
    await axios.post('http://localhost:4000/api/users', newUser);
    // Register new user
    localStorage.setItem("signupUsername", signupUsername);
    localStorage.setItem("signupEmail", signupEmail);
    localStorage.setItem("signupPassword", signupPassword);
    alert("User registered successfully");
    setSignup(false);
    }
    catch (error) {
      console.log(error);
      alert('Sign up failed!');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  if (loggedIn) {
    return (
      <div>
        <p>Welcome, {signupUsername}!</p>
        <button className="btn btn-primary" onClick={handleLogout}>Log out</button>
      </div>
    );
  } else if (signup) {
    return (
      <div>
        <h2>Sign up</h2>
        <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>
            Username:
            <input
              type="text"
              value={signupUsername}
              className="form-control"
              onChange={(event) => setSignupUsername(event.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-group">
          <label>
            Email:
            <input
               type="text"
               className="form-control"
               value={signupEmail}
              onChange={(event) => setSignupEmail(event.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              value={signupPassword}
              className="form-control"
              onChange={(event) => setSignupPassword(event.target.value)}
            />
          </label>
          </div>
          <br />
          <button className="btn btn-danger" type="submit">Sign up</button>
          
          <button className="btn btn-danger" onClick={() => setSignup(false)}> Cancel</button>
        </form>
        <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>
            Username:
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          </div>
          <br />
          <div className="form-group">
            
          <label>
            Password:
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">Log in</button>
        </form>
        <button className="btn btn-primary" onClick={() => setSignup(true)}>Sign up</button>
        <footer class="py-5 my-5 bg-dark">
      <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </footer>
      </div>
    );
  }
}

export default Login;
