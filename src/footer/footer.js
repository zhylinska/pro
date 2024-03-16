
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import "./footer.css"


export default function Footer() {
    return (
        <section
            id="footer"
            className="footerContainer">
            <a
                id="email"
                className="footerIcon"
                href="mailto:#"
            >
                <MdEmail/>
            </a>
            <a
                id="tel"
                className="footerIcon"
                href="tel:+491639344970"
            >
                <FaPhoneAlt/>
            </a>
        </section>
    )
}