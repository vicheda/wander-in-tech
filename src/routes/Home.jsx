import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Whatwedo from "../components/Whatwedo";
import Aboutus from "../components/Aboutus";
import Applyas from "../components/Applyas";
import Impact from "../components/Impact";
import Last from "../components/Last";
import MainImg from "../assets/background1.png";
import Logo from "../assets/logo.png";

function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={MainImg}
        logoImg={Logo}
        title="Wander in Tech"
        text="Step into the Digital World"
        url="/"
        buttonText="Dive Deeper"
        btnClass="show"
      />
      <Navbar />
      <Main />
      <Aboutus />
      <Whatwedo />
      <Applyas />
      <Impact />
      <Last />
    </>
  );
}

export default Home;
