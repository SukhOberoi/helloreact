import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import image from "../assets/2.jpg"

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
        </>
    )
}
export default Products