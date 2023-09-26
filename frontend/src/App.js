import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Select from 'react-select';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import './App.css';

const url = '/dgc_courses/?format=json';

function App() {
  const [geojsonData, setGeojsonData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState();
  const [optionList, setOptionList] = useState([]);
  const [filteredFeatures, setFilteredFeatures] = useState([]); // Initialize with an empty array
  function handleSelect(data) {
    setSelectedOptions(data);
    console.log(data);

   const filtered = geojsonData.features.filter(
      (feature) => feature.properties.state === data.value
    );

    // Set the filtered features to update the map markers
    setFilteredFeatures(filtered);
  }

  useEffect(() => {
    // Fetch GeoJSON data when the component mounts
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setGeojsonData(data);

        // Extract unique 'state' values
        const stateValues = [...new Set(data.features.map((feature) => feature.properties.state))];

        // Create options array with 'value' and 'label'
        const options = stateValues.map((state) => ({ value: state, label: state }));

        // Set optionList with the extracted options
        setOptionList(options);
      })
      .catch((error) => {
        console.error('Error fetching GeoJSON data:', error);
      });
  }, []);

  const customIcon = new Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (

    <div className="App">
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
           <Select
          options={optionList}
          placeholder="Select State"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
        />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
      <header className="App-header">
        <h1>Disc Golf Courses</h1>
      </header>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select State"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
        />
      </div>
      {geojsonData && (
       <MapContainer center={[39.82, -98.58]} zoom={5} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredFeatures.length > 0 ? (
  // Render filtered markers if there are filtered features
  filteredFeatures.map((feature, index) => (
    <Marker
      key={index}
      position={[
        feature.geometry?.coordinates[1], // Latitude
        feature.geometry?.coordinates[0], // Longitude
      ]}
      icon={customIcon}
    >
      <Popup>
        Course: {feature.properties.name} <br />
        {feature.properties.state}
      </Popup>
    </Marker>
  ))
) : (
  // Render all markers if there are no filtered features
  geojsonData.features.map((feature, index) => (
    <Marker
      key={index}
      position={[
        feature.geometry?.coordinates[1], // Latitude
        feature.geometry?.coordinates[0], // Longitude
      ]}
      icon={customIcon}
    >
      <Popup>
        Course: {feature.properties.name} <br />
        {feature.properties.state}
      </Popup>
    </Marker>
  ))
)}
        </MapContainer>
      )}
    </div>
  );
}

export default App;
