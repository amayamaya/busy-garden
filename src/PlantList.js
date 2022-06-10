import Plants from './Plants.js';

export default function PlantList({ plants }) {
  return (
    <div className="garden">
      {plants.map((plant, i) => (
        <Plants plant={plant} key={plant + i} />
      ))}
    </div>
  );
}
