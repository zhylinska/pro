import {useState} from "react";
import {TiDelete} from "react-icons/ti";

export default function JoinForm({join, setJoin}) {

    const [name, setName] = useState("")
    const [surName, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")


    function handleSubmit(event) {
        event.preventDefault()
        setName("")
        setPhone("")
        setEmail("")
    }

    return (
        <div className="modalWrapper">
            <div className="joinFormContainer">
                <form className="joinForm">
                    <button className="formCloseButton"
                            onClick={() => setJoin(false)}
                    >
                        <TiDelete/>
                    </button>
                    <label htmlFor="name"
                           className="joinInputLabel"
                    >Enter your name</label>
                    <input type="text"
                           name="name"
                           required
                           className="joinInput"
                           value={name}
                           onChange={(event) => setName(event.target.value)}
                    />

                    <label htmlFor="experience"
                           className="joinInputLabel"
                    >Do you have any experience?</label>
                    <select className="joinInput"
                            name="experience"
                    >
                        <option></option>
                        <option value="yes">yes</option>
                        <option value="no">no</option>
                    </select>
                    <label htmlFor="name"
                           className="joinInputLabel"
                    >Enter your phone number</label>
                    <input type="tel"
                           name="tel"
                           required
                           className="joinInput"
                           value={phone}
                           onChange={(event) => setPhone(event.target.value)}
                    />
                    <label htmlFor="name"
                           className="joinInputLabel"
                    >Enter your email</label>
                    <input type="email"
                           name="email"
                           required
                           className="joinInput"
                           value={email}
                           onChange={(event) => setEmail(event.target.value)}
                    />
                    <button type="submit"
                            className="joinInputButton"
                            onClick={handleSubmit}
                    >Send
                    </button>
                </form>
            </div>
        </div>
    )
}