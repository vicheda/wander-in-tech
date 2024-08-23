import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className="hero">
        <div className={props.cName}>
          <img alt="HeroImg" src={props.heroImg} className="background-image" />
          <img alt="LogoImg" src={props.logoImg} className="overlay-image" />
        </div>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
