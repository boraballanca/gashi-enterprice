import {Link} from 'react-router-dom'
import Logo from '../assets/logo-03.png'
import {FaLinkedin, FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";
import './styles/footer.css'
const Footer=()=>{
    return(
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to={'/'} className={'footer__logo'}>
                        <img src={Logo} alt=""/>
                    </Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, repellendus?</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target={'_blank'} rel={'noreferrer noopener'}><FaLinkedin/></a>
                    <a href="https://facebook.com" target={'_blank'} rel={'noreferrer noopener'}><FaFacebookF/></a>
                    <a href="https://instagram.com" target={'_blank'} rel={'noreferrer noopener'}><AiFillInstagram/></a>
                    <a href="https://twitter.com" target={'_blank'} rel={'noreferrer noopener'}><AiOutlineTwitter/></a>
                </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link to={'/contact'}>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to={'/work'}>Our work</Link>
                    <Link to={'/questions'}>Ask questions</Link>
                </article>
                <article>
                    <h4>More about us</h4>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </article>
            </div>
            <div className={'footer__copyright'}>
                <small>n'vi space</small>
            </div>
        </footer>
    )
}
export default Footer