import Header from "./Header";
import Footer from "./Footer";

function ErrorPage() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="https://i.postimg.cc/Jh85BNp3/page-not-found.webp"
          alt="Page not found graphic"
          style={{ maxWidth: "30%", height: "auto" }}
        />
      </div>
      <h1
        style={{ textAlign: "center", marginTop: "10px", marginBottom: "20px" }}
      >
        Apologies that happened! We are trying our best to work on the website
        right now.
      </h1>
      <Footer />
    </>
  );
}

export default ErrorPage;
