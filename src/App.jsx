const fetchAirQuality = async (city) => {
  if (!city.trim()) {
    setError('Please enter a city name')
    return
  }

  setLoading(true)
  setError(null)
  setAirQualityData(null)

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/airquality?city=${encodeURIComponent(city)}`,
      {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY,  // Use the env variable
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    
    // Check if data is empty or invalid
    if (!data || Object.keys(data).length === 0) {
      throw new Error('City not found or no air quality data available')
    }

    setAirQualityData(data)
    setSearchedCity(city)
  } catch (err) {
    setError(err.message || 'Failed to fetch air quality data')
  } finally {
    setLoading(false)
  }
}
