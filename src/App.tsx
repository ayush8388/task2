import React, { useState, useEffect } from 'react';

import Input from './components/Input';
import Card from './components/Card';

interface WeatherData {
  temp: number;
  description: string;
  icon: string;
}

const App: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (!city) return;

    const apiKey = "83acb100cecfd01f13232d7126abd10a";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((data) => {
        if (data.main) {
          // console.log(data);
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } else {
          setWeather(null);
        }
      });
  }, [city]);

  return (
    
    <div className='max-w-md mt-44  mx-auto p-4 bg-gray-100 rounded shadow-lg'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Weather App</h1>
      <Input onSearch={setCity}/>
      {weather && (
        <Card
          temp={weather.temp}
          description={weather.description}
          icon={weather.icon}
        />
      )}
    </div>
  );
};

export default App;