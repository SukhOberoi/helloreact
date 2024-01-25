import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import image from "../assets/12.jpg"
import Destination from '../components/Destination';

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
        </>
    )
}
export default Home