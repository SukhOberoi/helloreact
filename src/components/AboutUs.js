import "./AboutStyles.css"
import DestinationComponent from "./DestinationComponent"
import elon1 from "../assets/elon1.jpg"
import elon2 from "../assets/elon2.jpg"

function AboutUs(){
    return(
        <div className="about-text">
            <h2>Our History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo augue et egestas porttitor. Maecenas sit amet eleifend ligula. Integer ut nisi id metus molestie sodales. Integer sit amet posuere risus, sit amet vulputate lectus. Nam mi elit, eleifend non tellus in, cursus tempus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum purus massa, accumsan non congue id, tristique quis dui. Nam interdum aliquam magna, quis ullamcorper nibh vehicula et. Fusce consequat rhoncus purus id dignissim. Suspendisse in tincidunt massa.

</p>

            <h2>Our Mission</h2>
            <DestinationComponent
                heading = "Mr. Elon Musk"
                text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nunc nulla, nec consequat leo venenatis ut. Nulla facilisi. Integer posuere diam quis aliquet dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend enim mi, sed feugiat justo sollicitudin nec. Donec mauris sem, iaculis quis tortor sit amet, gravida accumsan metus. Duis suscipit, libero sit amet aliquet efficitur, quam leo porta ante, sed ornare purus erat eget massa. Aenean auctor ligula nunc, non euismod nibh sollicitudin vitae."
                photo1 = {elon1}
                photo2 ={elon2}
                cname = "first-des"
                />
            <p className="after-dest">Duis hendrerit, erat eu euismod posuere, arcu ante condimentum nunc, eget malesuada sem urna pharetra diam. Suspendisse commodo venenatis auctor. Maecenas sit amet porta orci. Quisque vitae accumsan risus, ac malesuada augue. Pellentesque fermentum sem nec sem tempor venenatis iaculis ut ligula. Curabitur faucibus erat at lorem vestibulum bibendum. Suspendisse tempor eget magna id ornare. Ut lobortis lectus at mi tristique, in feugiat velit vehicula.

</p>

            <h2>Our Vision</h2>
            <p>Fusce auctor interdum ipsum vel dapibus. Nulla condimentum iaculis suscipit. Phasellus in nisi nec quam fringilla cursus. Morbi quis consequat lacus. Vestibulum viverra nisi non cursus pellentesque. Curabitur vehicula egestas arcu, et hendrerit massa ullamcorper id. Cras convallis felis ac vehicula sagittis. Praesent fermentum elementum magna vel dignissim. Vivamus ipsum libero, volutpat vitae hendrerit non, luctus non felis. Curabitur et interdum quam, non facilisis arcu. In ac turpis in tortor egestas semper in non sem. Donec at neque congue, cursus tellus sed, lacinia nisl. Nulla mollis et ante non elementum. In eu neque nec velit ullamcorper placerat ac non magna. Integer accumsan elementum nisl sed dapibus.

</p>


        </div>
    )
}

export default AboutUs