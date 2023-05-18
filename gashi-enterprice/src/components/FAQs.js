import SectionHeader from "./SectionHeader";
import {FaQuestion} from "react-icons/fa";
import Question from './Question'
import '../pages/styles/faq.css'
import logo from '../assets/logo-11.png'
const faqs = [
    {
        id: 1,
        question: "What kind of company are we?",
        answer: "Gashi Enterprise LLC is a full-service construction company that specializes in providing a wide range of high-quality services to residential and commercial clients"
    },
    {
        id: 2,
        question: "How much does one project costs?",
        answer: "The cost of each project is calculated based on the work needed, the tools, staff and requirements from the client! For more details please contact us through our email or phone number"
    },
    {
        id: 3,
        question: "How can we get in contact?",
        answer: "Contact us via email:business@gashienterprise.com or phone number: +1 23 456 789!"
    },
    {
        id: 4,
        question: "Where are we located?",
        answer: "Gashi Enterprise is located in Michigan, US"
    },
    {
        id: 5,
        question: "How we work?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "How long should i wait to start the project?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]

const FAQs =()=>{
    return(
        <section className={'faqs'}>
            <div className="container faqs__container" >
                <SectionHeader icon={<FaQuestion/>} title={'FAQs'} />
                <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question,answer})=>{
                            return <Question key={id} question={question} answer={answer}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default FAQs