import AddWater from './AddWater';
import RainChart from './RainChart';
import RunningAverage from './RunningAverage';
import Total from './Total';
import WaterHistory from './WaterHistory';

export default function Dashboard({ data }) {
  return (
    <div className="p-8 pt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      <RainChart className="col-span-6" heading="Recent Rainfall" data={data.slice(0, 7)} />
      <RainChart className="col-span-6" heading="Expected Rainfall" data={data.slice(7)} />
      <Total className="col-span-4" heading="Last 7 days" data={data.slice(0, 7)} />
      <RunningAverage className="col-span-4" heading="Running Average" data={data.slice(2, 11)} />
      <Total className="col-span-4" heading="Next 7 days" data={data.slice(7)} />
      <AddWater className="col-span-3" />
      <WaterHistory className="col-span-4" />
    </div>
  );
}
