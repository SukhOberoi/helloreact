import DestinationComponent from "./DestinationComponent"
import "./DestinationStyle.css"
import taal1 from "../assets/1.jpg"
import taal2 from "../assets/2.jpg"
import taal3 from "../assets/8.jpg"
import taal4 from "../assets/4.jpg"

const Destination = () => {
    return(
        <>
            <div className="destinations">
                <h1>Popular Destination</h1>
                <p>Explore the world and get unique experiences</p>
            

                <DestinationComponent
                heading = "Taal Volcano, Batangas"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nunc nulla, nec consequat leo venenatis ut. Nulla facilisi. Integer posuere diam quis aliquet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend enim mi, sed feugiat justo sollicitudin nec. Donec mauris sem, iaculis quis tortor sit amet, gravida accumsan metus. Duis suscipit, libero sit amet aliquet efficitur, quam leo porta ante, sed ornare purus erat eget massa. Aenean auctor ligula nunc, non euismod nibh sollicitudin vitae."
                photo1 = {taal1}
                photo2 ={taal2}
                cname = "first-des"
                />


                <DestinationComponent
                heading = "Mt.Daguldul, Batangas"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nunc nulla, nec consequat leo venenatis ut. Nulla facilisi. Integer posuere diam quis aliquet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend enim mi, sed feugiat justo sollicitudin nec. Donec mauris sem, iaculis quis tortor sit amet, gravida accumsan metus. Duis suscipit, libero sit amet aliquet efficitur, quam leo porta ante, sed ornare purus erat eget massa. Aenean auctor ligula nunc, non euismod nibh sollicitudin vitae."
                photo1 = {taal3}
                photo2 ={taal4}
                cname = "first-des reverse"
                />
            </div>

        </>
    )
}

export default Destination;