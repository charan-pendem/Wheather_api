import { FaExclamationTriangle } from 'react-icons/fa'
import './ErrorMessage.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-container">
      <div className="error-icon">
        <FaExclamationTriangle />
      </div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{message}</p>
      <p className="error-suggestion">
        Please check the city name and try again.
      </p>
    </div>
  )
}

export default ErrorMessage