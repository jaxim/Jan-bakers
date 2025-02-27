import "./Styles/Home/Home.css";
import Cat from "./Cat";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <header></header>
      <div className="hero">
        <div className="hero-content">
          <h1>
            The complete <br />
            Baking Solution
          </h1>
          <p>Shop with us</p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
      <Cat />
      <Footer />
    </>
  );
}
