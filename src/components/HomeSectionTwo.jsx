import Button from "./Button";
import { Link } from "react-router-dom";

function HomeSectionTwo() {
  return (
    <section className="section-two">
      <article>
        <h2>Choose Your Favorite Dish</h2>
        <p>In our Colombian food restaurant, we invite you to discover your favorite dish. Explore our diverse selection of authentic flavors and choose the one that captures your heart. Welcome to a unique culinary experience in Colombia!</p>
        <Link to="/BookPage" className="btn-link">
        <Button text="Book Now"  />
        </Link>
      </article>

      <img src="./images/section-two-img.png" alt="choose your favorite dish" />

    </section>
  )
}

export default HomeSectionTwo