import Activity10 from "../assets/10.jpg";
import "./WhatwedoStyles.css";

const Whatwedo = () => {
  return (
    <div className="what-we-do">
      <div className="image">
        <img alt="img" src={Activity10} />
      </div>
      <div className="des-text">
        <h2>WHAT WE DO</h2>
        <p>
          Are you creative? Passionate? Community-minded? Are you curious how
          code intersects with your passion? Join our incredible community of
          curious and creative learners this summer - no coding experience is
          required!
        </p>
        <button>Learn more about camp!</button>
      </div>
    </div>
  );
};

export default Whatwedo;
