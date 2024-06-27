import { useEffect, useState } from "react"
import Nav from "./components/Nav"

import RainChart from "./components/RainChart";
import { format } from "date-fns";
import Total from "./components/Total";

function App() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
        setLocation(position.coords);
      });
      }
    }
    getLocation();
  }, [])

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=precipitation_sum&past_days=7`
      ).then(res => res.json());
      const dataArr = res.daily.precipitation_sum.map((sum, index) => {
        return {
          name: format(new Date(res.daily.time[index]), 'MMM d'),
          total: Math.round(sum/25.4 * 100) / 100
        };
      })
      setData(dataArr);
    }
    if (location) {
      getData();
    }
  }, [location])

  return (
    <div>
      <Nav />
      <div className="p-8 pt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <RainChart heading="Recent Rainfall" data={data.slice(0, 8)} />
        <Total heading="Last 7 days" data={data.slice(0,8)} />
        <RainChart heading="Expected Rainfall" data={data.slice(8)} />
        <Total heading="Next 7 days" data={data.slice(8)} />
      </div>
    </div>
  );
}

export default App
