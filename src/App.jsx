import Nav from './components/Nav';

import Dashboard from './components/Dashboard';

import useLocation from './lib/useLocation';
import useWeatherData from './lib/useWeatherData';

function App() {
  const { name, coords } = useLocation();
  const data = useWeatherData(coords);
  return (
    <div>
      <Nav location={name} />
      <Dashboard data={data} />
    </div>
  );
}

export default App;
