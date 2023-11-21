import React from "react";
import { Weather } from "../../data/weatherData";

interface WeatherCardProps {
  weather: Weather;
  unit: "C" | "F";
  onAddFavorite: (cityId: number) => void;
  onRemoveFavorite: (cityId: number) => void;
  isFavorite: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  unit,
  onAddFavorite,
  onRemoveFavorite,
  isFavorite,
}) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(weather.id);
    } else {
      onAddFavorite(weather.id);
    }
  };

  const temperature =
    unit === "C"
      ? `${weather.temperature}°C`
      : `${(weather.temperature * 9) / 5 + 32}°F`;
  return (
    <tr className="weather-card" data-testid={`weather-card-${weather.id}`}>
      <td>{weather.city}</td>
      <td>{temperature}</td>
      <td>{weather.description}</td>
      <td>
        <button
          onClick={handleFavoriteClick}
          data-testid={`weather-card-action-${weather.id}`}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>
      </td>
    </tr>
  );
};

export default WeatherCard;
