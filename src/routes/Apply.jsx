import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Apply() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/27139481/pexels-photo-27139481/free-photo-of-a-person-walking-on-the-beach-with-a-surfboard.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        title="Data Science"
        text="Step into the Digital World"
        url="/"
        buttonText="Apply"
        btnClass="show2"
      />
    </>
  );
}

export default Apply;
