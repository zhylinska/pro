import React, {useState} from "react"
import dataExamples from "./dataExamples";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import "./slider.css"

export default function Slider() {

    const [activeId, setActiveId] = useState(1)

    function Next() {
        if (activeId === dataExamples.length) {
            setActiveId(prev => 1)
        } else {
            setActiveId(prev => prev + 1)
        }
    }

    function Previous() {
        if (activeId === 1) {
            setActiveId(prev => dataExamples.length)
        } else {
            setActiveId(prev => prev - 1)
        }
    }

    const sliderCards = dataExamples
        .filter((example) => example.id === activeId)
        .map((example) => {
            return (
                <div className="sliderImg" key={example.id}>
                    <img src={example.img}
                         alt="example"
                         />
                </div>
            )
        })
    return (
        <section id="slider" className="sliderContainer">
            <button
                className="arrow"
                onClick={Previous}><MdOutlineArrowBackIosNew/>
            </button>
            {sliderCards}
            <button
                className="arrow"
                onClick={Next}><MdOutlineArrowForwardIos/>
            </button>
        </section>
    )

}