import "./TripStyles.css"


function TripCard(props){
    return(
        <div className="t-card">
            <div className="t-img">
                <img alt="card-img" src={props.imgsrc}/>
            </div>
            <div className="t-text">
                <h4>{props.desti}</h4>
                <p>{props.deets}</p>
            </div>

        </div>
    )
}

export default TripCard