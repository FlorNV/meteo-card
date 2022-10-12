const URL_API =
  "https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=America/Argentina/Jujuy";

export const getForecast = async ({ name, latitude, longitude }) => {
  try {
    const response = await fetch(
      `${URL_API}&latitude=${latitude}&longitude=${longitude}`
    );
    return response.json();
  } catch {
    throw new Error("could not fetch forecast");
  }
};
