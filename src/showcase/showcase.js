
import "./showcase.css"

export default function Showcase({showText, Show}) {


    return (
        <section id="showcase" className="showcaseContainer">

            <div className="showcaseInfo"
                 onClick={() => Show()}
            >
                <div className="title">
                    <h1>pro küchemontage</h1>
                    <button
                        className="red">{showText ? "-" : "+"}
                    </button>
                </div>

                <p className="text">{showText && "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, itaque mollitia nemo officiis reiciendis vero? Aliquid, animi atque eaque et expedita facilis illo minima nisi numquam odio quisquam ratione voluptates?"}</p>

            </div>
        </section>
    )
}