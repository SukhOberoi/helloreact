import "./FooterStyles.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="socials">
                <div className="logo">
                    <h1>CraftMyTrip</h1>
                    <p>Choose your favourite Destination.</p>
                </div>
                <div className="social-links">
                    <a className="social-logo" href="https://facebook.com" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                    <a className="social-logo" href="https://instagram.com" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a className="social-logo" href="https://x.com" target="_blank">
                        <i class="fa-brands fa-x-twitter"></i>
                    </a>
                    <a className="social-logo" href="https://discord.com" target="_blank">
                        <i class="fa-brands fa-discord"></i>
                    </a>
                </div>
            </div>
            <div className="directory-links">
                <div className="column">
                    <h4>Projects</h4>
                    <a className="link" href="/">Changelogs</a>
                    <a className="link" href="/">Status</a>
                    <a className="link" href="/">License</a>
                    <a className="link" href="/">All Versions</a>
                </div>
                <div className="column">
                    <h4>Community</h4>
                    <a className="link" href="/">GitHub</a>
                    <a className="link" href="/">Issues</a>
                    <a className="link" href="/">Project</a>
                    <a className="link" href="/">All Versions</a>
                </div>
                <div className="column">
                    <h4>Help</h4>
                    <a className="link" href="/">Support</a>
                    <a className="link" href="/">Troubleshooting</a>
                    <a className="link" href="/">Contact Us</a>
                </div>
                <div className="column">
                    <h4>Others</h4>
                    <a className="link" href="/">Terms of Service</a>
                    <a className="link" href="/">Privacy Policy</a>
                    <a className="link" href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer