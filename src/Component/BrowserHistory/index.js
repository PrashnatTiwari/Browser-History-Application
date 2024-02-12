import './index.css'

const BrowserHistory = props => {
  const {appDetails, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = appDetails

  const onClickDeleteButton = () => {
    deleteUser(id)
  }

  return (
    <li className="list-item">
      <div>
        <div className="flex-container">
          <div>
            <p className="time-paragraph">{timeAccessed}</p>
          </div>
          <div>
            <img src={logoUrl} className="app-logo" alt="app logo" />
          </div>
          <div>
            <h1 className="app-heading">{title}</h1>
          </div>
          <div>
            <p className="app-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-image"
          alt="delete"
          onClick={onClickDeleteButton}
        />
      </div>
    </li>
  )
}

export default BrowserHistory
