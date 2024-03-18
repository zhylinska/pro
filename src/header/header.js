import React, {useState} from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./header.css"

export default function Header({Show}) {

    const [showContacts, setShowContacts] = useState(false)
    const[showMenu, setShowMenu] = useState(false)



    return (
        <section className="headerContainer">


                <div className="navBlock">
                    <div className="navItem"
                         onClick={() => setShowMenu((prev) => !prev)}
                    >Über uns<span className="red headerArrow"><MdKeyboardArrowDown/></span>
                        <ul className="navItemList">
                            <li
                                className={showMenu ? "active" : "navListItem"}
                            ><a className="ref"
                                onClick={()=> Show()}
                                href="#showcase">Über uns</a></li>
                            <li className={showMenu ? "active" : "navListItem"}>
                                <a className="ref" href="#slider">Projekte</a>
                            </li>
                            <li className={showMenu ? "active" : "navListItem"}>
                                <a className="ref" href="#">Unser Team</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navItem">Karriere<span className="red headerArrow"><MdKeyboardArrowDown/></span></div>

                </div>


                <div className="logoBlock">
                    <div className="logoTop">PRO</div>
                    <div className="logoBottom">Küchemontage</div>
                </div>


                <div className="contactsBlock">
                    <div className="navItem"
                         onClick={() => setShowContacts((prev) => !prev)}
                    >Kontakte<span className="red  headerArrow"><MdKeyboardArrowDown /></span>
                        <ul className="contactsItemList">
                            <li className={ showContacts ? "active" : "contactsListItem"}>
                                <a className="ref" href="#">Nürnberg <br/>Nopitschstraße 2</a>
                            </li>
                            <li className={ showContacts ? "active" : "contactsListItem"}>
                                <a className="ref" href="#">Tel.: +491639344970</a>
                            </li>
                            <li className={ showContacts? "active" : "contactsListItem"}>
                                <a className="ref" href="#email">Email</a>
                            </li>
                        </ul>
                    </div>
                </div>


        </section>
    )
}