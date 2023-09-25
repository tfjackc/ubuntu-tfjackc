import React, { useEffect, useState } from 'react'; // Import React and useState
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import axios from 'axios';
import './App.css';

// Define the GeoJSON URL
const url = '/dgc_courses/?format=json';

// Define a custom icon
export const icon = new Icon({
  iconUrl: 'blue-marker.png',
});

function App() {
  // State to hold the GeoJSON data
  const [geojsonData, setGeojsonData] = useState(null);

  // Fetch GeoJSON data when the component mounts
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setGeojsonData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  // Function to create a GeoJSON layer
  // const createGeoJSONLayer = () => {
  //   if (geojsonData) {
  //     return (
  //       <GeoJSON data={geojsonData} style={{ color: 'blue' }}>
  //         {/* You can customize the style of the GeoJSON features here */}
  //       </GeoJSON>
  //     );
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Disc Golf Courses</h1>
      </header>
      <MapContainer center={[39.82, -98.58]} zoom={5} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <GeoJSON data={geojsonData} style={{ color: 'blue' }}>
          {/* You can customize the style of the GeoJSON features here */}
        </GeoJSON>
      </MapContainer>
    </div>
  );
}

export default App;
