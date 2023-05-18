import {Link} from 'react-router-dom'
import Logo from '../assets/logo-03.png'
import {FaLinkedin, FaFacebookF} from "react-icons/fa";
import {AiOutlineTwitter,AiFillInstagram} from "react-icons/ai";
import './styles/footer.css'
import {BsTelephone} from "react-icons/bs";
import {TbPin} from "react-icons/tb";
import {HiOutlineMail} from "react-icons/hi";

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
                    <a href="https://www.facebook.com/GashiEnterprise?mibextid=LQQJ4d" target={'_blank'} rel={'noreferrer noopener'}><FaFacebookF/></a>
                    <a href="https://instagram.com/gashi_enterprise?igshid=YmMyMTA2M2Y=" target={'_blank'} rel={'noreferrer noopener'}><AiFillInstagram/></a>
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
                    <Link to={'/gallery'}>Our work</Link>
                    <Link to={'/faqs'}>FAQs</Link>
                    <Link to={'/service'}>Service Form</Link>
                </article>
                <article>
                    <h4>Quick Contact</h4>
                    <p><BsTelephone/> +1 23 456 789</p>
                    <p><TbPin/>   Troy, Michigan</p>
                    <p><HiOutlineMail/>  business@gashienterprise.com</p>
                </article>
            </div>
            <div className={'footer__copyright'}>
                <small>n'vi space</small>
            </div>
        </footer>
    )
}
export default Footer