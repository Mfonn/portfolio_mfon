import './index.scss'
import { Link as ReactLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons'
import { faHome, faRectangleList, faUser } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => (
   <div className='nav-bar'>
    <ReactLink className='logo' to='/'>
        <img src={LogoS} alt="logo" />
    </ReactLink>
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/projects">
            <FontAwesomeIcon icon={faRectangleList} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mfonnta/"
            >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mfonn"
            >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://mfon.hashnode.dev/"
            >
                <FontAwesomeIcon icon={faHashnode} color="#4d4d4e" />
            </a>
        </li>
    </ul>
   </div>
)

export default Sidebar