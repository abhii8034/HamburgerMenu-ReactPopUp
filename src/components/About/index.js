import './index.css'

import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <img
        className="mobile-about-img"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png "
      />
      <img
        className="desktop-about-img"
        alt="about"
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png "
      />
    </div>
  </>
)

export default About
