import {useState} from 'react'
import SectionHeader from "./SectionHeader";
import {MdOutlineReviews} from 'react-icons/md'
import Card from './Card'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";

const reviews = [
    {
        id: 1,
        name: "Diana Ayi",
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Student",

    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",

    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",

    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",

    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",

    }
]
const Reviews = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job} = reviews[index]

    const prevReviewHandler = () => {
        setIndex(prev => prev - 1)
        if (index <= 0) {
            setIndex(reviews.length - 1)
        }
    }
    const nextReviewHandler = () => {
        setIndex(prev => prev + 1)
        if (index >= reviews.length - 1) {
            setIndex(0)
        }
    }
    return (
        <section className={'reviews'}>
            <div className="container reviews__container">
                <SectionHeader icon={<MdOutlineReviews/>} title='Reviews' className={'reviews__head'}/>
                <Card className={'review'}>
                    <p className="review__quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className={'review__title'}>{job}</small>
                </Card>
                <div className="review__btn-container">
                    <button className="reviews__btn" onClick={prevReviewHandler}><IoIosArrowDropleftCircle/></button>
                    <button className="reviews__btn"onClick={nextReviewHandler}><IoIosArrowDroprightCircle/></button>
                </div>
            </div>
        </section>
    )
}
export default Reviews