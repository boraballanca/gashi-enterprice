import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './styles/navbar.css'
import Logo from '../assets/logo-01.png'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Our Work",
        path: '/our-work'
    },
    {
        name:'Services',
        path:'/services'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]
const Navbar = () => {
const [isNavShowing, setIsNavShowing]=useState(false);

return(
    <nav>
        <div className="container nav__container">
            <Link to={'/'} className={'nav__logo'}>
                <img src={Logo} alt="Nav Logo"/>
            </Link>

            <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>
                {
                    links.map(({name, path},index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive})=>isActive?'active-nav':''}
                                onClick={()=>setIsNavShowing(prev => !prev)}
                                >
                                {name}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className={'nav__toggle-btn'} onClick={()=>{setIsNavShowing(prev=> !prev)}}>
                {isNavShowing? <MdOutlineClose/> : <GoThreeBars/>}
            </button>
        </div>
    </nav>
)

}
export default Navbar