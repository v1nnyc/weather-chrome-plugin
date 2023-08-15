import React, { useEffect } from "react";
import { fetchOpenWeatherData } from "../../utils/api";
import "./WeatherCard.css";

function WeatherCard({ cityProp }: { cityProp: string }) {
  useEffect(() => {
    fetchOpenWeatherData(cityProp, "metric").then((data) => {
      console.log(data.main.temp);
    });
  }, [cityProp]);

  return <div>{cityProp}</div>;
}

export default WeatherCard;
