import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/3.jpg"
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

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

        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact