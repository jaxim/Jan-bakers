import Navbar from "./Navbar";
import "./Styles/Home/Home.css";
import Cat from "./Cat";
import Timer from "./Timer";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <header>
        <Timer />
        <Navbar />
      </header>
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
