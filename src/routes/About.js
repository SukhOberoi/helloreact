import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/1.jpg"

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
        </>
    )
}
export default About