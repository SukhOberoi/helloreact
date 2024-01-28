import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/1.jpg"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About(){
    return(
        <>
            <Navbar />
            <Hero
            cName= "hero half"
            src = {image}
            heading = "About Us"
            body = ""
            />
            <AboutUs/>
            <Footer/>
        </>
    )
}
export default About