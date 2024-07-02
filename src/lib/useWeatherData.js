import { addHours, fromUnixTime, isBefore, isSameDay } from 'date-fns';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../slices/weatherSlice';

export default function useWeatherData(location) {
  const dispatch = useDispatch();

  const weatherData = useSelector(state => state.weather.data);
  const weatherDataTimestamp = useSelector(state => state.weather.timestamp);

  const getData = useCallback(async () => {
    const params = new URLSearchParams({
      latitude: location.latitude,
      longitude: location.longitude,
      daily: 'precipitation_sum',
      past_days: 7,
      timezone: 'America/Chicago',
      precipitation_unit: 'inch',
      timeformat: 'unixtime',
    });
    const url = new URL(`https://api.open-meteo.com/v1/forecast?${params}`);
    console.log('fetching weather data');
    const res = await fetch(url.href)
      .then(res => res.json())
      .catch(err => console.log(err));

    const dataArr = res.daily.precipitation_sum.map((sum, index) => {
      return {
        date: res.daily.time[index],
        rain: sum,
      };
    });

    dispatch(setWeatherData(dataArr));
  }, [location]);

  useEffect(() => {
    if (location && (!weatherData || !weatherDataTimestamp || isBefore(addHours(new Date(weatherDataTimestamp), 1), new Date()))) {
      getData();
    }
  }, [location, getData, weatherData, weatherDataTimestamp]);

  // const [waterData, setWaterData] = useLocalStorage('waterData', []);
  const waterData = useSelector(state => state.water);

  const data =
    weatherData?.map(day => {
      const water = waterData
        ?.filter(waterDay => isSameDay(fromUnixTime(waterDay.date), fromUnixTime(day.date)))
        .reduce((acc, cur) => {
          return acc + cur.amount;
        }, 0);
      return {
        ...day,
        water,
      };
    }) || [];

  return data;
}
