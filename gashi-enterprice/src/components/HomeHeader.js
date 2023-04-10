import {Link} from 'react-router-dom'
import Gashi from '../assets/logo-01.png'
const HomeHeader = () => {
return(
    <header className={'home__header'}>
        <div className="container home__header-container">
            <div className="home__header-left">
                <h4>Gashi Enterprise</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut deleniti, distinctio enim fugiat hic illum itaque labore,
                    molestias necessitatibus odit quas quod quos recusandae repellendus
                    rerum, sequi veritatis voluptatem voluptatum.
                </p>
                <Link to={'/about'} className={'btn lg'}>
                    Get Started
                </Link>
            </div>
            <div className="home__header-right">
                <div className="home__header-logo">
                    <div className="home__header-image">
                        <img src={Gashi} alt="Gashi Enterprise"/>
                    </div>
                </div>
            </div>
        </div>

    </header>
)
}
export default HomeHeader