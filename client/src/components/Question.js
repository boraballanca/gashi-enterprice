import {FiChevronUp, FiChevronDown} from "react-icons/fi";
import {useState} from 'react'
const Question = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false)
    return (
        <article className={'question'} onClick={() => {
            setIsAnswerShowing(prev => !prev)
        }}>
            <div>
                <h4>{question}</h4>
                <button className="question__icon">
                    {
                        isAnswerShowing ? <FiChevronUp/> : <FiChevronDown/>
                    }
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
        </article>

    )
}
export default Question