interface WeatherProps {
  temp: number;
  description: string;
  icon: string;
}

export default function WeatherCard({ temp, description, icon }: WeatherProps) {
  return (
    <div className="h-full w-full bg-slate-800 p-6 rounded shadow text-center text-white">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather icon"
        className="mx-auto mb-4"
      />
      <h2 className="text-2xl mb-2">{temp}°C</h2>
      <p className="text-4xl mb-2">{description}</p>
    </div>
  );
}
