import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as parkDate from "./data/skateboard.json";
import LandingPage from './LandingPage';
import './App.css';



export default function App() {



    const [viewport, setViewport] = useState({
      latitude: 38.89511,
      longitude: -77.03637,
      width: '35rem',
      height: '62vh',
      zoom: 7
    });

  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape"){
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);


  return (<div>
    <LandingPage />
    <ReactMapGL style={{marginLeft:"auto", marginRight:"auto"}}
    {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle="mapbox://styles/dollabeal22/ck6zdil7z2onq1iuiwgb6mloh"
    onViewportChange={viewport =>
      { setViewport(viewport);
      }
    }
    >
      {parkDate.features.map((park) =>(
        <Marker key={park.properties.Park_ID}
        latitude= {park.geometry.coordinates[1]}
        longitude = {park.geometry.coordinates[0]}


        >
         <button class="marker-btn" onClick={(e) => {
           e.preventDefault();
           setSelectedPark(park)
         }}>
           <img src="logo.svg" alt="shop" />
         </button>
        </Marker>
      ))}

      {selectedPark ? (
        <Popup latitude={selectedPark.geometry.coordinates[1]}
        longitude={selectedPark.geometry.coordinates[0]}
          onClose={() => {
          setSelectedPark(null);
        }}
        >

        <div>
          <h2>{selectedPark.properties.NAME}</h2>
          <p>{selectedPark.properties.DESCRIPTIO}</p>
        </div>

        </Popup>
      ) : null}
    </ReactMapGL>
    <LandingPage />


  </div>);
}
