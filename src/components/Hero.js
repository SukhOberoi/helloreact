import "./HeroStyle.css";


function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.src} />
                    <div className="text">
                        <h1>{props.heading}</h1>
                        <p>{props.body}</p>
                        <a href={props.url} className={props.linkClass}>{props.linkText}</a>
                    </div>
            </div>
        </>
    )
}
export default Hero;