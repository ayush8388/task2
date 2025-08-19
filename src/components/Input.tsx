import { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

export default function Input({ onSearch }: Props) {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(city);
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-row gap-2">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className=" bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
