import TripCard from "./TripCard"
import "./TripStyles.css"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
    return(
        <>
            <div className="trip">
                <h1>Recent Trips</h1>
                <p>You can discover unique destinations using Google Maps</p>
            </div>
            
            <div className="cards">
                <TripCard
                imgsrc = {Trip1}
                desti = "Trip to Indonesia"
                deets = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis leo elementum, efficitur dolor eu, viverra elit. Donec feugiat pharetra urna, id lacinia tortor eleifend vitae. Nullam id ex a tortor tincidunt bibendum non sed leo. Curabitur rhoncus, neque sit amet hendrerit facilisis, tellus risus rutrum turpis, venenatis egestas nulla mi ut mi. Curabitur magna lectus, commodo id molestie a, vestibulum non dolor. "
                />
                <TripCard
                imgsrc = {Trip2}
                desti = "Trip to Malaysia"
                deets = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ultrices tellus. Aenean in volutpat risus, laoreet accumsan tellus. Curabitur nibh lorem, iaculis in felis quis, facilisis bibendum purus. Proin dignissim aliquam sapien, vitae efficitur lorem sollicitudin id. Nullam porttitor mauris vestibulum nibh faucibus porta. Nam quis velit iaculis, lobortis dui a, aliquam lorem. Aenean sollicitudin venenatis mauris, vel commodo arcu vehicula eget. "
                />
                <TripCard
                imgsrc = {Trip3}
                desti = "Trip to France"
                deets = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et mauris lacinia, ornare enim ac, fringilla elit. Fusce consectetur sem ex, ac viverra dolor eleifend in. Morbi tristique sem non sollicitudin bibendum. Aenean interdum nec dolor eget rhoncus. Proin porta leo vitae leo volutpat, nec varius turpis fringilla. Aliquam dictum nibh magna, vitae venenatis arcu tincidunt vel. Donec dapibus suscipit ligula, id tempor erat faucibus et. "
                />
            </div>
        </>
    )
}

export default Trip