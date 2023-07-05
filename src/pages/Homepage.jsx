import React from "react";
import { Helmet } from "react-helmet";
import Main from "../components/Main";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>The Better Body Company - Solving Health Issues Naturally</title>
        <meta
          name="description"
          content="The Better Body Company: Your solution to health issues. Discover supplements that work, improve gut health, achieve diet goals, lose weight, and regain mental focus."
        />
        <meta
          name="keywords"
          content="Better Body Company, menopause,health supplements, gut health, diet goals, weight loss, mental clarity"
        />

        <link rel="canonical" href="https://better-body-react.vercel.app/" />
        <meta
          property="og:title"
          content="The Better Body Company - Solving Health Issues Naturally"
        />
        <meta
          property="og:description"
          content="The Better Body Company is dedicated to finding effective supplements and addressing health issues at their root. Join us to improve gut health, achieve diet goals, lose weight, and enhance mental clarity."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/hPVmbWFT/betterbody.webp"
        />
        <meta
          property="og:url"
          content="https://better-body-react.vercel.app/menopause"
        />
        <meta
          name="twitter:title"
          content="The Better Body Company - Solving Health Issues Naturally"
        />
        <meta
          name="twitter:description"
          content="Discover The Better Body Company: We tackle health issues with effective supplements. Improve gut health, achieve diet goals, lose weight, and boost mental clarity. Join us on the journey to better health."
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/hPVmbWFT/betterbody.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Homepage;
