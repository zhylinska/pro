import dataQuestions from "./dataQuestions";
import React, {useState} from "react";
import QuestionCard from "./questionCard";
import "./question.css"

export default function Questions() {

    const [curActive, setCurActive] = useState(null)

    const questions = dataQuestions.map((question)=>
        <QuestionCard
            id={question.id}
            question={question.question}
            answer={question.answer} />
    )



    return (
        <section className="questionsContainer">
            {questions}
        </section>
    )
}