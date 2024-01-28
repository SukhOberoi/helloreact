import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import image from "../assets/12.jpg"
import Destination from '../components/Destination';
import Trip from '../components/Trip.js';
import Footer from '../components/Footer.js';

function Home(){
    return(
        <>
            <Navbar />
            <Hero
            cName= "hero"
            src = {image}
            heading = "Your Journey Your Dream"
            body = "Travel To Your Favourite Destination"
            url = "/"
            linkClass = "show"
            linkText = "Travel Now"
            />
            <Destination />
            <Trip/>
            <Footer/>
        </>
    )
}
export default Home