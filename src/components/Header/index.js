import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          alt="website logo"
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-btn"
            type="button"
            testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-btn"
              testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="31" />
            </button>
            <ul className="nav-links">
              <li className="nav-link-item">
                <Link className="link-item" to="/" onClick={() => close()}>
                  <AiFillHome className="icon-size" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="link-item" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill className="icon-size" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
