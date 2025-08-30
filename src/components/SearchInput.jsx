import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './SearchInput.css'

const SearchInput = ({ onSearch, loading }) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() && !loading) {
      onSearch(city.trim())
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-wrapper">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter city name..."
            className="search-input"
            disabled={loading}
          />
          <button
            type="submit"
            className="search-button"
            disabled={loading || !city.trim()}
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchInput