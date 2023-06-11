import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMessage, faVideo, faArrowLeft, faArrowRight, faRotateRight, faMagnifyingGlass, faGear, faCalendarDays, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="nav-header">
            <div className="nav-bar-left-icons">
                <img src="https://res.cloudinary.com/dpgviap9s/image/upload/v1685621711/favicon_fwwgkw.jpg" alt="logo"/>
                <FontAwesomeIcon icon={faPhone} />
                <FontAwesomeIcon icon={faMessage} />
                <FontAwesomeIcon icon={faVideo} />
            </div>
            <div className="nav-bar-middle-icons">
                <div className="nav-bar-search-icons">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <FontAwesomeIcon icon={faArrowRight} />
                    <FontAwesomeIcon icon={faRotateRight} />
                </div>
                
                <div className="nav-bar-search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" className="search-input" placeholder="Search Dailpad"/>
                </div>
            </div>
            <div className="nav-bar-right-icons">
                <FontAwesomeIcon icon={faGear} />
                <FontAwesomeIcon icon={faCalendarDays} />
                <div className="white-background">
                    <div className="online-status">
                        <p className="status-profile">SP</p>
                        <div className="green-light">
                            
                        </div>
                    </div>
                </div>
                
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
        </nav>
    )
}

export default Navbar;