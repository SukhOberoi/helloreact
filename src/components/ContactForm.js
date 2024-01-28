import "./ContactFormStyles.css"

function ContactForm(){
    return(
        <div className="contactform">
            <h1>Send a message to us!</h1>
            <form className="form-ele">
                <input className="text-input" placeholder="Name"/>
                <input className="text-input" placeholder="Email"/>
                <input className="text-input" placeholder="Subject"/>
                <textarea className= "text-input area" placeholder="Message"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm