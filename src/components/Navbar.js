import { Component } from "react";
import "./navbarstyles.css";
import {NavItems} from "./NavItems.js"
import { Link } from "react-router-dom";


class Navbar extends Component {
    state = {clicked:false}
    handleClick = () =>{
        this.setState({clicked : !this.state.clicked})
    }
	render() {
		return (
			<nav className="NavbarItems">
				<Link className="logo-home" to={"/"}><h1 className="navbar-logo">CraftMyTrip</h1></Link>
                <div className="hamburgir" onClick={this.handleClick}>
                    <i className={this.state.clicked? "fa-solid fa-xmark": "fa-solid fa-bars"}></i>
                </div>
				<ul className={this.state.clicked?"navlist active":"navlist"}>
					{NavItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className ={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                <button>Sign In</button>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
