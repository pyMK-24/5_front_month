import { useState } from "react"
import weatherDB from "../db/weather.json"
import styles from "./Weather.module.scss"

export const Weather = () => {
  const [weather, setWeather] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [cityToShow, setCityToShow] = useState("")
  const [error, setError] = useState(false)

  const findWeather = () => {
    const city = inputValue.trim().toLowerCase()
    setCityToShow(inputValue.trim())

    const cityInfo = weatherDB[city]

    if (cityInfo) {
      setWeather(cityInfo)
      setError(false)
    } else {
      setWeather(null)
      setError(true)
    }
  };

  return (
    <div className={styles.weatherWrapper}>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder="Write city:"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") findWeather(); }}
        />
        <button className={styles.button} onClick={findWeather}>
          Show Weather
        </button>
      </div>

      {error ? (
        <p className={styles.error}>City "{cityToShow}" not found.</p>
      ) : weather ? (
        <div className={styles.weatherInfo}>
          <h2>{cityToShow}</h2>
          <p>Temperature: {weather.temp}°C</p>
          <p>Description: {weather.description} {weather.icon}</p>
        </div>
      ) : (
        <p className={styles.prompt}>Enter a city to see the weather.</p>
      )}
    </div>
  );
};
