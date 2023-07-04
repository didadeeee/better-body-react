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
          content="The Better Body Company is a collective mind of problem solvers, professional product formulators, health experts, and naturopaths. We strive to find supplements that actually work and tackle health issues from the root cause. Discover our mission, our success stories, and how we can help you improve gut health, achieve diet goals, lose weight, and regain mental clarity and focus."
        />
        <meta
          name="keywords"
          content="Better Body Company, health supplements, gut health, diet goals, weight loss, mental clarity"
        />

        <link rel="canonical" href="https://better-body-react.vercel.app/" />
        <meta
          property="og:title"
          content="The Better Body Company - Solving Health Issues Naturally"
        />
        <meta
          property="og:description"
          content="The Better Body Company is a collective mind of problem solvers, professional product formulators, health experts, and naturopaths. We strive to find supplements that actually work and tackle health issues from the root cause. Discover our mission, our success stories, and how we can help you improve gut health, achieve diet goals, lose weight, and regain mental clarity and focus."
        />
        <meta property="og:image" content="https://i.postimg.cc/hPVmbWFT/betterbody.webp" />
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
          content="The Better Body Company is a collective mind of problem solvers, professional product formulators, health experts, and naturopaths. We strive to find supplements that actually work and tackle health issues from the root cause. Discover our mission, our success stories, and how we can help you improve gut health, achieve diet goals, lose weight, and regain mental clarity and focus."
        />
        <meta name="twitter:image" content="https://i.postimg.cc/hPVmbWFT/betterbody.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default Homepage;
