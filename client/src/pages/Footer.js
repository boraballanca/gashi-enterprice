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
                    <p>Our mission is to help homeowners bring their dream homes to life by providing personalized and customized solutions that are tailored to their needs and budget.</p>
                <div className="footer__socials">
                    <a href="https://www.facebook.com/GashiEnterprise?mibextid=LQQJ4d" target={'_blank'} rel={'noreferrer noopener'}><FaFacebookF/></a>
                    <a href="https://instagram.com/gashi_enterprise?igshid=YmMyMTA2M2Y=" target={'_blank'} rel={'noreferrer noopener'}><AiFillInstagram/></a>
                </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'https://app.termly.io/document/terms-of-service/957509ff-0009-4427-99a8-cbd581b69b08'}>Terms & Conditions</Link>
                    <Link to={'https://app.termly.io/document/privacy-policy/e2f532d8-c339-4904-aa14-19311f231eaa'}>Privacy Policy</Link>
                    <Link to={'https://app.termly.io/document/acceptable-use/d9562ea9-3534-4fbe-835a-caef6fe89ee5'}>Acceptable Use Policy</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to={'/our_work'}>Our work</Link>
                    <Link to={'/faqs'}>FAQs</Link>
                    <Link to={'/service'}>Service Form</Link>
                    <Link to={'/feedback'}>Feedback Form</Link>
                </article>
                <article>
                    <h4>Quick Contact</h4>
                    <p><BsTelephone/> +1 248 801 3209</p>
                    <p><TbPin/>   Royal Oak, Michigan</p>
                    <p><HiOutlineMail/>  info@gashienterprise.com</p>
                </article>
            </div>
            <div className={'footer__copyright'}>
                <small>n'vi space</small>
            </div>
        </footer>
    )
}
export default Footer