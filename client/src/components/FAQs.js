import SectionHeader from "./SectionHeader";
import {FaQuestion} from "react-icons/fa";
import Question from './Question'
import '../pages/styles/faq.css'

const faqs = [
    {
        id: 1,
        question: "What kind of company are we?",
        answer: "Gashi Enterprise LLC is a full-service construction company that specializes in providing a wide range of high-quality services to residential and commercial clients"
    },
    {
        id: 2,
        question: "How much does one project costs?",
        answer: "The cost of each project is calculated based on the work needed, the tools, staff and requirements from the client! For more details please contact us through our email or phone number, or check our Services page!"
    },
    {
        id: 3,
        question: "How can we get in contact?",
        answer: "Contact us via email: info@gashienterprise.com or phone number: +1 248 801 3209!"
    },
    {
        id: 4,
        question: "What is our service area?",
        answer: "We operate in Auburn Hills, Birmingham, Bloomfield Hills,  Waterford, West Bloomfield , Ann Arbor, Troy , Sterling Heights, Royal Oak,Pontiac."
    },
    {
        id: 5,
        question: "What sets us apart from other contractors?",
        answer: "We provide customized solutions, quality craftsmanship, excellent customer service, competitive pricing and innovation "
    },
    {
        id: 6,
        question: "What are we best known for?",
        answer: " We are best known for High-quality products or services, excellent customer service and corporate social responsibility"
    }
]

const FAQs = () => {
    return (
        <section className={'faqs'}>
            <div className="container faqs__container">
                <SectionHeader icon={<FaQuestion/>} title={'FAQs'}/>
                <div className="faqs__wrapper">
                    {
                        faqs.map(({id, question, answer}) => {
                                return <Question key={id} question={question} answer={answer}/>
                            }
                        )
                    }
                </div>
            </div>
        </section>
    )
}
export default FAQs