import Button from "./Button"
import { Link } from "react-router-dom"

function HomeSectionTree() {
  return (
    <section className="section-tree">
        <div className="tamal-box">
          <p>Get ready to taste our  take  on modern Colombian Menu. Indulge  your tastebud</p>
          <Link to="/MenuPage" className="btn-link">
            <Button text="Get Menu" />
          </Link>
          <img src="./images/tamal.png" alt="Tamal colombian dish" />
        </div>
        <div className="bandeja-paisa-dish">
          <img src="./images/bandeja-paisa.png" alt="Bandeja paisa colombian dish" />
        </div>
        <div className="fish-img-box">
          <h2>--Let's talk about our signature menu</h2>
          <img src="./images/mojarra.png" alt="Mojarra Frita colombian dish" />
        </div>
    </section>
  )
}

export default HomeSectionTree