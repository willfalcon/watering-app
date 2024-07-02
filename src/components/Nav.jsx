export default function Nav({ location }) {
  return (
    <nav className="flex justify-between border-b border-gray-200 p-5">
      <h1 className="font-bold">Watering App</h1>
      {location && <p className="font-bold">{location}</p>}
    </nav>
  );
}
