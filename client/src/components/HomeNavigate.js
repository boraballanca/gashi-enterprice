import {Link} from "react-router-dom";
const HomeNavigate = () => {
    return (
        <>
            <div className="home__navigate">
                <div className="container home__navigate-container">
                    <Link to={'/our-work'}className={'navigate_btn'}>Our Work ></Link>
                    <Link to={'/contact'} className={'navigate_btn'}>Contact Us ></Link>
                </div>
            </div>
        </>
    )
}
export default HomeNavigate