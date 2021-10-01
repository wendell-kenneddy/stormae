type Base = string;
type Visibility = number;
type Dt = number;
type Timezone = number;
type Id = number;
type Name = string;
type Cod = number;
type Weather = [
  {
    id: string;
    main: string;
    description: string;
    icon: string;
  }
];

interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Coordinates {
  long: number;
  lat: number;
}

interface Wind {
  speed: number;
  deg: 350;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface RelevantData {
  coord: Coordinates;
  weather: Weather;
  base: Base;
  main: Temperature;
  visibility: Visibility;
  wind: Wind;
  clouds: Clouds;
  dt: Dt;
  sys: Sys;
  timezone: Timezone;
  id: Id;
  name: Name;
  cod: Cod;
}

/**
 * Makes the request to the weather api.
 * @param {string} query - The location name to search.
 * @returns Null, if the request fails, and a RelevantData object if successful.
 */
async function makeRequest(query: string): Promise<null | RelevantData> {
  const API_KEY = process.env.API_KEY;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&lang=pt_br&units=metric`
  );

  if (response.status === 404) return null;

  const json: RelevantData = await response.json();
  return json;
}

export { makeRequest, RelevantData };
