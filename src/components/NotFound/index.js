import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        alt="not found"
        className="not-found-image"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="not-found-main-text">Lost Your Way?</h1>
      <p className="not-found-sub-text">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </>
)

export default NotFound
