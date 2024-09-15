import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';

function App() {
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle successful login here
    // e.g., send response to your backend, store token, etc.
  };

  const handleError = (error) => {
    console.error('Login Error:', error);
    // Handle login error here
  };
  return (
    <div className="center-container">
      <div className='centered-content'>
        <img src="heart.png" width="100" alt="Heart" />
        <h1 className='login'>Login</h1>
        {/* <button className="button-google" id="googleLogin">Login using Google</button> */}
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
        />
        <div className="separator"><span>or log in with your email</span></div>

        <input type="email" id="email" className="input-field" placeholder="Email Address" />
        <input type="password" id="password" className="input-field" placeholder="Password" />
        <button id="loginButton" className="signin_button">Login</button>
        <div className="signup-link">Don't have an account? <a href="signup.html">Sign Up</a></div>
      </div>
    </div>
  );
}

export default App;
