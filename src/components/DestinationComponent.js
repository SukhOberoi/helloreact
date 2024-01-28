import { Component } from "react";
import "./DestinationStyle.css"

class DestinationComponent extends Component{
    render(){
        return(
            <>
                <div className={this.props.cname}>
                    <div className="des-text">
                        <h2>{this.props.heading}</h2>
                        <p>{this.props.text}</p>
                    </div>
                    <div className="des-images">
                        <img alt="pic1" src={this.props.photo1}/>
                        <img alt="pic2"src={this.props.photo2}/>
                    </div>
                </div>
        </>
        )
    }
}

export default DestinationComponent