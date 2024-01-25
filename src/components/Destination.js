import taal1 from "../assets/1.jpg"
import taal2 from "../assets/2.jpg"
import "./DestinationStyle.css"

const Destination = () => {
    return(
        <>
            <div className="destinations">
                <h1>Popular Destination</h1>
                <p>Explore the world and get unique experiences</p>
            

                <div className="first-des">
                    <div className="des-text">
                        <h2>Taal Volcano, Batangas</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nunc nulla, nec consequat leo venenatis ut. Nulla facilisi. Integer posuere diam quis aliquet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend enim mi, sed feugiat justo sollicitudin nec. Donec mauris sem, iaculis quis tortor sit amet, gravida accumsan metus. Duis suscipit, libero sit amet aliquet efficitur, quam leo porta ante, sed ornare purus erat eget massa. Aenean auctor ligula nunc, non euismod nibh sollicitudin vitae.</p>
                    </div>
                    <div className="des-images">
                        <img alt="taal1" src={taal1}/>
                        <img alt="taal2"src={taal2}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destination;