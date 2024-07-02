import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setName } from '../slices/locationSlice';
import { useEffect } from 'react';
import { GEOAPIFY_KEY } from './constants';

export default function useLocation() {
  const dispatch = useDispatch();
  const coords = useSelector(state => state.location.coords);

  const name = useSelector(state => state.location.name);

  useEffect(() => {
    function getLocation() {
      if ((!coords || !name) && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;
          dispatch(setLocation({ latitude, longitude }));

          const params = new URLSearchParams({
            lat: latitude,
            lon: longitude,
            apiKey: GEOAPIFY_KEY,
          });
          const url = new URL(`https://api.geoapify.com/v1/geocode/reverse?${params}`);

          const geocode = await fetch(url.href).then(response => response.json());

          if (geocode.features) {
            dispatch(setName(geocode.features[0].properties.city + ', ' + geocode.features[0].properties.state_code));
          }
        });
      }
    }

    getLocation();
  }, []);

  return { coords, name };
}
