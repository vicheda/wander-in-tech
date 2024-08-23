import "./AboutusStyles.css";
import Element1 from "../assets/ele1.png";
import Element2 from "../assets/ele2.png";
import Element3 from "../assets/ele3.png";

const Aboutus = () => {
  return (
    <div className="about-us">
      <h2>ABOUT US</h2>
      <div className="table">
        <div className="column item-1">
          <img alt="img" src={Element1} />
          <p>Workshops</p>
        </div>
        <div className="column item-2">
          <img alt="img" src={Element2} />
          <p>Coding Camp</p>
        </div>
        <div className="column item-3">
          <img alt="img" src={Element3} />
          <p>Online Resources</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
