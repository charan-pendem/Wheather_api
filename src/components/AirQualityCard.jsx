import { WiDaySunny, WiSmog } from 'react-icons/wi'
import { FaLeaf, FaExclamationTriangle } from 'react-icons/fa'
import './AirQualityCard.css'

const AirQualityCard = ({ data, city }) => {
  // Function to get AQI status and color
  const getAQIStatus = (aqi) => {
    if (aqi <= 50) return { status: 'Good', color: '#10B981', icon: <FaLeaf /> }
    if (aqi <= 100) return { status: 'Moderate', color: '#F59E0B', icon: <WiDaySunny /> }
    if (aqi <= 150) return { status: 'Unhealthy for Sensitive', color: '#EF4444', icon: <WiSmog /> }
    if (aqi <= 200) return { status: 'Unhealthy', color: '#DC2626', icon: <FaExclamationTriangle /> }
    if (aqi <= 300) return { status: 'Very Unhealthy', color: '#7C2D12', icon: <WiSmog /> }
    return { status: 'Hazardous', color: '#4C1D95', icon: <WiSmog /> }
  }

  const overallAQI = data.overall_aqi || 0
  const aqiInfo = getAQIStatus(overallAQI)

  return (
    <div className="air-quality-card">
      <div className="card-header">
        <h2 className="city-name">{city}</h2>
        <div className="aqi-main">
          <div className="aqi-circle" style={{ borderColor: aqiInfo.color }}>
            <span className="aqi-value">{overallAQI}</span>
            <span className="aqi-label">Overall AQI</span>
          </div>
          <div className="aqi-status">
            <div className="aqi-icon" style={{ color: aqiInfo.color }}>
              {aqiInfo.icon}
            </div>
            <span className="aqi-text" style={{ color: aqiInfo.color }}>
              {aqiInfo.status}
            </span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <p className="data-info">
          Air Quality Index • Real-time data
        </p>
      </div>
    </div>
  )
}

export default AirQualityCard