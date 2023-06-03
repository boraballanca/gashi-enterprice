import {Link} from 'react-router-dom'
import Card from "./Card";


const HomeHeader = ({image, title, content}) => {
    return (
        <header className={'home__header'}>
            <div className={'container header__container'}>
                <div className="header__image-wrapper">
                    <div className="header__container-bg">
                        <img src={image} alt="Header Image"/>
                    </div>
                </div>
            </div>
            <div className="header__card-wrapper">
                <Link to={'/about'}>
                    <Card className={'header__card'}>
                        <h4>{title}</h4>
                        <small>{content}</small>
                    </Card>
                </Link>
            </div>
        </header>

    )
}
export default HomeHeader