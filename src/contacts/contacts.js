import React from "react";
import "./contacts.css"

export default function Contacts() {
    return (
       <section className="contactsContainer">
            <div className="footerContacts">
                <h4 className="footerContactsTitle">anschrift</h4>
                <p  className="footerContactsInfo">ProKüche #<br/>Nopitschstraße 2<br/>90441 Nürnberg </p>
            </div>
            <div className="footerContacts">
                <h4 className="footerContactsTitle">kontact</h4>
                <ul className="footerContactsInfo">
                    <li>Telefon: +491639344970</li>
                    <li>E-Mail: #</li>
                    <li>Internet: #</li>
                </ul>
            </div>
            <div className="footerContacts">
                <h4 className="footerContactsTitle">rechtliches</h4>
                <ul className="footerContactsInfo">
                    <li>Impressum #</li>
                    <li>Datenschutz #</li>
                </ul>
            </div>
        </section>
    )
}