export default function Info({ data }) {
  return !data ? (
    "Did not find the location"
  ) : (
    <div>
      {data.region},{data.country_name}
      <img
        id="map"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Equirectangular_projection_SW.jpg/1920px-Equirectangular_projection_SW.jpg"
        alt="world map"
      />
    </div>
  );
}
