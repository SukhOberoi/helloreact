import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/2.jpg"
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Products(){
    return(
        <>
        <Navbar />  
        <Hero
            cName= "hero half"
            src = {image}
            heading = "Our Products and Services"
            body = ""
            />
        <Trip/>
        <Footer/>
        </>
    )
}
export default Products