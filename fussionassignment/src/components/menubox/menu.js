
import "./menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons'

const Menubox = () => {
    return (
        <div className="contact-details">
          <div className="contacts-inbox">
            <FontAwesomeIcon icon={faInbox} />
            <h3 className="menu-heading">Inbox</h3>
          </div>
          <div className="contacts-inbox">
            <FontAwesomeIcon icon={faInbox} />
            <h3 className="menu-heading">Contacts</h3>
          </div>
          <div className="contact-dropdown">
              <h1>#  All channels</h1>
              <div className="dropdown-menu">
              <a href="#" className="dropdown-department"> <FontAwesomeIcon icon={faCaretDown}  className="arrow-down"/> Departments</a>
                <div>
                    <div className="dropdown-option">
                      <div className="dropdown-menu">
                          <li className="show-properties-container"> 
                            <div className="show-properties"></div>
                            <h3 className="show-properties-name">ShadowProperties</h3>
                          </li>
                      </div>
                    </div>
                </div>
                <a href="#" className="dropdown-department"> <FontAwesomeIcon icon={faCaretDown} className="arrow-down"/>Recents</a>
                <div className="dropdown-contact-options">
                    <li className="contacts-options">
                        <h1 className="contact-heading">P</h1>
                        <h3 className="contact-name">Private</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading">A</h1>
                        <h3 className="contact-name">Ariane Wolgamot</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading">W</h1>
                        <h3 className="contact-name">W Romanovski</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading">C</h1>
                        <h3 className="contact-name">Carnrick Paul</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 245-2635</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 809-7400</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(305) 216-1419</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 245-2635</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 962-2865</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 271-3103</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 271-3103</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(312) 953-0961</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(312) 953-0961</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(312) 953-0961</h3>
                    </li>
                    <li className="contacts-options">
                        <h1 className="contact-heading"><FontAwesomeIcon icon={faUser} /></h1>
                        <h3 className="contact-name">(561) 542-0415</h3>
                    </li>
                </div>
              </div>
          </div>
      </div>
    )
}

export default Menubox