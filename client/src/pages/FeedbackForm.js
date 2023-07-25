import {useState} from "react";
import './styles/feedback.css'
import axios from "axios";
import SectionHeader from "../components/SectionHeader";
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";


const FeedbackForm = () => {
    const [recipient_email, setEmail] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerNumber, setCustomerNumber] = useState('');
    const [results, setResults] = useState({
        quality: '',
        value: '',
        deadlines: '',
        satisfaction: '',
        expectations: '',
        recommendations: '',
    });
    const [firstHear, setFirstHear] = useState('');
    const [expectations, setExpectation] = useState('');
    const handleRadioChange = (questionId, option) => {
        setResults((prevState) => ({
            ...prevState,
            [questionId]: option,
        }))
        console.log('results', results)
    }

    function sendFeedback() {
        if (recipient_email && customerName && customerNumber && results) {
            axios.post('http://localhost:5000/send_feedback', {
                recipient_email,
                customerName,
                customerNumber,
                results,
                firstHear,
                expectations
            }).then(() => alert('Email sent successfully!'))
                .catch(() => alert('Something went wrong, check again!'))
            return;
        }
        return alert('Please fill in all required fields!')
    }

    return (
        <>
            <ScrollUpButton/>
            <div className={'container feedback-form__container'}>

                <div className="feedback-form__wrapper">
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

                        <div className={'feedback-table__container'}>
                            <table>
                                <thead>
                                <tr className={'row'}>
                                    <td className={'feedback_question'}></td>
                                    <td className="questions_feedback_options" colSpan={4}>
                                        <label htmlFor="">excellent</label>
                                        <label htmlFor="">good</label>
                                        <label htmlFor="">fair</label>
                                        <label htmlFor="">poor</label>
                                    </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className={'row'}>
                                    <td className={'feedback_question'}>1. How would you rate the quality of our work?
                                    </td>
                                    <td className="feedback_options" colSpan={4}>
                                        <input type="radio" name={'quality'}
                                               onChange={() => handleRadioChange('quality', 'Excellent')}/>
                                        <input type="radio" name={'quality'}
                                               onChange={() => handleRadioChange('quality', 'Good')}/>
                                        <input type="radio" name={'quality'}
                                               onChange={() => handleRadioChange('quality', 'Fair')}/>
                                        <input type="radio" name={'quality'}
                                               onChange={() => handleRadioChange('quality', 'Poor')}/>
                                    </td>
                                </tr>
                                <tr className={'row'}>
                                    <td className={'feedback_question'}>2. How would you rate the value we added to the
                                        overall
                                        project?
                                    </td>
                                    <td className="feedback_options" colSpan={4}>
                                        <input type="radio" name={'value'}
                                               onChange={() => handleRadioChange('value', 'Excellent')}/>
                                        <input type="radio" name={'value'}
                                               onChange={() => handleRadioChange('value', 'Good')}/>
                                        <input type="radio" name={'value'}
                                               onChange={() => handleRadioChange('value', 'Fair')}/>
                                        <input type="radio" name={'value'}
                                               onChange={() => handleRadioChange('value', 'Poor')}/>
                                    </td>
                                </tr>
                                <tr className={'row'}>
                                    <td className={'feedback_question'}>3. Did we meet the deadlines and versatility set
                                        by the
                                        customer?
                                    </td>
                                    <td className="feedback_options" colSpan={4}>
                                        <input type="radio" name={'deadlines'}
                                               onChange={() => handleRadioChange('deadlines', 'Excellent')}/>
                                        <input type="radio" name={'deadlines'}
                                               onChange={() => handleRadioChange('deadlines', 'Good')}/>
                                        <input type="radio" name={'deadlines'}
                                               onChange={() => handleRadioChange('deadlines', 'Fair')}/>
                                        <input type="radio" name={'deadlines'}
                                               onChange={() => handleRadioChange('deadlines', 'Poor')}/>
                                    </td>
                                </tr>
                                <tr className={'row'}>
                                    <td className={'feedback_question'}>4. What is your satisfaction with the quality of
                                        the work as a
                                        customer?
                                    </td>
                                    <td className="feedback_options" colSpan={4}>

                                        <input type="radio" name={'satisfaction'}
                                               onChange={() => handleRadioChange('satisfaction', 'Excellent')}/>
                                        <input type="radio" name={'satisfaction'}
                                               onChange={() => handleRadioChange('satisfaction', 'Good')}/>
                                        <input type="radio" name={'satisfaction'}
                                               onChange={() => handleRadioChange('satisfaction', 'Fair')}/>
                                        <input type="radio" name={'satisfaction'}
                                               onChange={() => handleRadioChange('satisfaction', 'Poor')}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={'yes-no-questions__container'}>
                            <p>
                                5. Did we meet your expectations?
                                <span className="yes-no-options">
                    <label htmlFor="expectations">
                        <input type="radio" name={'expectations'}
                               onChange={() => handleRadioChange('expectations', 'Yes')}/> Yes
                    </label>
                    <label htmlFor="expectations">
                        <input type="radio" name={'expectations'}
                               onChange={() => handleRadioChange('expectations', 'No')}/> No
                    </label>
                </span>

                            </p>
                            <p>
                                6. Would you recommend our product/service to other people?
                                <span className="yes-no-options">
                    <label htmlFor="expectations">
                        <input type="radio" name={'recommendations'}
                               onChange={() => handleRadioChange('recommendations', 'Yes, definitely')}/> Yes, definitely
                    </label>
                    <label htmlFor="expectations">
                        <input type="radio" name={'recommendations'}
                               onChange={() => handleRadioChange('recommendations', 'Maybe')}
                        /> Maybe
                    </label>
                    <label htmlFor="expectations">
                        <input type="radio" name={'recommendations'}
                               onChange={() => handleRadioChange('recommendations', 'Very unlikely')}/> Very unlikely
                    </label>
                    <label htmlFor="expectations">
                        <input type="radio" name={'recommendations'}
                               onChange={() => handleRadioChange('recommendations', 'No, not at all')}/> No, not at all
                    </label>
                </span>
                            </p>
                            <p>
                <span className="extra-info">
                    <label htmlFor="more">7. What could we improve in order to better live up to your expectations?
                        <textarea name="message" cols="30" rows="5" onChange={(e) => setExpectation(e.target.value)}/>
                    </label>
                </span>
                <span className="extra-info">
                    <label htmlFor="more">8. Where did you first hear about our company?
                        <textarea name="message" cols="30" rows="5" onChange={(e) => setFirstHear(e.target.value)}/>
                    </label>
                </span>
                            </p>
                        </div>
                        <div className={'submit-button'}>
                            <input type="submit" value={'Send'} onClick={() => sendFeedback()}/>
                        </div>


                    </form>
                </div>
            </div>
        </>
    )
}
export default FeedbackForm