import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {useState} from 'react'
const Question =({question,answer})=>{
    const[isAnswerShowing, setIsAnswerShowing]=useState(false)
    return(
        <article className={'question'} onClick={()=>{setIsAnswerShowing(prev=>!prev)}}>
            <div>
                <h4>{question}</h4>
                <button className="question__icon">
                    {
                        isAnswerShowing?<AiOutlineMinus/>:<AiOutlinePlus/>
                    }
                </button>
            </div>
            {isAnswerShowing && <p>{answer}</p>}
        </article>

    )
}
export default Question