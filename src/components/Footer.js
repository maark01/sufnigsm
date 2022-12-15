import "../styles/Footer.css"
import "boxicons"
export default function Footer() {
    const socialMediaElements = [
        { name: "Facebook", href: "https://facebook.com", icon: "facebook" },
        { name: "Instagram", href: "https://instagram.com", icon: "instagram" },
        { name: "Twitter", href: "https://twitter.com", icon: "twitter" },
    ];

    return (
        <div className="footer">
            <div className="socialMedia">
                {socialMediaElements.map(element => (
                    <span key={element.name} style={{ cursor: "pointer" }}
                        onClick={() => window.location.href = element.href}>
                        <box-icon type="logo" name={element.icon} color="white" size="lg" animation="tada-hover"></box-icon>
                    </span>
                ))}
            </div>
            <p>SufniGSM &copy; 2022</p>
        </div>
    )
}