import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <div className="error-page-content">
        <img
          src="https://i.postimg.cc/Jh85BNp3/page-not-found.webp"
          alt="Page not found graphic"
          className="error-page-image"
        />
        <h1 className="error-page-message">
          Apologies that happened! We are trying our best to work on the website
          right now.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
