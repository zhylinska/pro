import "./joinButton.css"
import JoinForm from "./joinForm";


export default function JoinButton({join, setJoin}) {


    return (
        <div >
            <button className="joinButton"
                    onClick={()=>setJoin(true)}
            >Verstärke <br/> unser Team</button>
            {join ? <JoinForm
                join={join}
                setJoin={setJoin}
            /> : null}
        </div>
    )
}