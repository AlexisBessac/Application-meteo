import { useState, useEffect } from 'react'

import './App.css'
import LatitudeInput from './LatitudeInput.jsx'
import LongitudeInput from './LongitudeInput.jsx'

function App() {

  const [latitude, setLatitude] = useState(52.42)
  const [longitude, setLongitude] = useState(13.41)
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`,
      );
      const dataNew = await response.json();
      setData(dataNew);
    }
 
 
    getData();
  }, [longitude, latitude]);


  return (
    <>
      <div>
        <LatitudeInput name="Latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)}></LatitudeInput>
        <LongitudeInput name="Longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)}></LongitudeInput>
      </div>
      <div>
        <ul>
          {data.hourly.time.map((time, index) => (
            <li key={time}>
              {time} : {data?.hourly?.temperature_2m?.[index]}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
