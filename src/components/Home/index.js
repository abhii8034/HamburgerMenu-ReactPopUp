import './index.css'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        className="mobile-home-img"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
      />
      <img
        className="desktop-home-img"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
      />
    </div>
  </>
)

export default Home
