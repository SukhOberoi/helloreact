import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/3.jpg"

function Contact(){
    return(
        <>
        <Navbar />
        <Hero
            cName= "hero half"
            src = {image}
            heading = "Contact Details"
            body = ""
            />
        </>
    )
}
export default Contact