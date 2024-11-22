import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here if needed
    navigate('/map');
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <img src="https://s3-alpha-sig.figma.com/img/6d36/a9d0/ce42e387c46c69d5a9c64928f0756d74?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WYaCoi5xQnulQNTFg654Bsdy8xl1P9iXX8JJ84~qzcFRB76LDw-X-VNodTdrWpjGr8QGnayapmHffUhfRFRNyhf16JixRtxxHF8BIU4vDbn9knpr5nuZQa1yCNFq5ElAlC3vP3eB5dyqoC0m7O18IDgZgO1omLTnJBm0JrL7xoq24OPy6Qy-5GHwPSGto6VHfr2F9QfnFL~ZST491nF4Wwwy2hiwMRUQExdZYVxkhHJiORTv5vnstzRxl6h19O7XblbfHfZlEG~XFRJu8tYiQvfiX-uqVpHlGAk9Bu779b9UNv9f2gPtmRGCcG0lOnzs9ckMkyGSzaCI0b68ibw2sw__" alt="Tree Background" className="tree-image" />
      </div>
      <div className="login-box">
        <h1>Sign In</h1>
        <p>Sign in to access the map.</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="ID/Email" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-links">
          <a href="#">¿Forgot your password?</a>
          <br />
          <a href="#">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;