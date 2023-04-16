import Logo from '../assets/logo-04.png'
import './styles/gallery.css'
import {AiFillCaretRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const Gallery = () => {
    return (
        <div className={'card__main'}>
            <div className="card__container">
                <img src={Logo} className={'card__img'} alt="Logo" />
                <div className="card__content">
                    <h2>Card Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, nulla!</p>
                    <Link to={'/'} className={'button'}> Learn More
                        <span className="material-symbols-outlined">
                        <AiFillCaretRight/>
                    </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Gallery