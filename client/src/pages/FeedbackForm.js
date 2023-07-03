import {useState} from "react";
import './styles/feedback.css'
import axios from "axios";
import SectionHeader from "../components/SectionHeader";

const FeedbackForm=()=>{
    const [recipient_email, setEmail] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerNumber, setCustomerNumber] = useState('');
    // const [date, setDate] = useState('');


    function sendEmail() {
        if (recipient_email && customerName && customerNumber) {
            axios.post('http://localhost:5000/send_feedback', {
                recipient_email,
                customerName,
                customerNumber,

            }).then(() => alert('Email sent successfully!'))
                .catch(() => alert('Something went wrong, check again!'))
            return;
        }
        return alert('Please fill in all required fields!')
    }

    return (
        <div className={'container feedback-form__container'}>

            <SectionHeader title={'Feedback'}
                preview={'Help us improve by giving your thoughts!'}
                           className={'feedback-header'}/>

            <form className={'feedback_content'}>
                <div className="user_info">
                    <label htmlFor="name">First & Last Name* :
                        <input type="text" name={'user_name'} required
                               onChange={(e) => setCustomerName(e.target.value)}/>
                    </label>
                    <label htmlFor="number"> Phone number* :
                        <input type="text" name={'phone_number'} required
                               onChange={(e) => setCustomerNumber(e.target.value)}/>
                    </label>
                    <label htmlFor="email"> Email address* :
                        <input type="email" name={'user_email'} required
                               onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                </div>






                <input type="submit" value={'Send'} onClick={() => sendEmail()}/>
            </form>
        </div>
        // </div>

    )
}
export default FeedbackForm