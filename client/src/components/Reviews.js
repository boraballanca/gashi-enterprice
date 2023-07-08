import {useState} from 'react'
import SectionHeader from "./SectionHeader";
import Card from './Card'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

const reviews = [
    {
        id: 1,
        name: "Paulette",
        quote: "They did a beautiful job! Attention to detail, very clean, always cleaned up at the end of each day. Very polite and respective. Would definitely use them again, and would recommend them to friends and family.",
        job: "Troy MI",

    },
    {
        id: 2,
        name: "Kim",
        quote: "They are a awesome company to work with. Awesome staff and clean and professional and perfectionist in all their work. Highly recommend them.",
        job: "Redford Charter Township MI",

    },
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
                <SectionHeader title={'Reviews'} preview={'A few words from our clients'} className={'reviews__head'}
                />
                <Card className={'review'}>
                    <div className="card__left">
                        <h3>{name}</h3>
                        <small className={'review__title'}>{job}</small>
                    </div>
                    <div className='card__right'>
                        <p className="review__quote">{`"${quote}"`}</p>
                    </div>
                </Card>
                <div className="review__btn-container">
                    <button className="reviews__btn" onClick={prevReviewHandler}><AiOutlineLeft/></button>
                    <button className="reviews__btn" onClick={nextReviewHandler}><AiOutlineRight/></button>
                </div>
            </div>
        </section>
    )
}
export default Reviews