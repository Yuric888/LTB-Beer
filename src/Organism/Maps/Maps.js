import styled from "styled-components";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  Popup,
} from "react-map-gl";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
let Public =
  "pk.eyJ1IjoieXVyaWNkZXY4ODgiLCJhIjoiY2xib3hxNWs4MHd3czN4cDhmdDJwOGhybCJ9.xUe97ZkzSKYdMxz52wSxIQ";
let Secret =
  "sk.eyJ1IjoieXVyaWNkZXY4ODgiLCJhIjoiY2xicmlwNGNtMHU1MDNwa2VjaWg0djdhMyJ9.5TTUYw0APN61q_K4xsQ-8g";
const Token = Public;

// 10.838283484535182, 106.83041307305784;
// 10.837630254424495, 106.83067742629686;
const Maps = () => {
  const [viewport, setViewport] = useState({
    width: "500px",
    height: "500px",
    latitude: 10.86195853994233,
    longitude: 106.74362380706191,
    zoom: 16,
  });
  return (
    <Section>
      <Map
        initialViewState={{
          longitude: 10.86195853994233,
          latitude: 106.74362380706191,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={Token}
      >
        <Marker
          latitude={10.86195853994233}
          longitude={106.74362380706191}
          offsetLeft={-20}
          offsetTop={-30}
        ></Marker>
        <Marker
          latitude={10.86185853994233}
          longitude={106.74872380706191}
          offsetLeft={-20}
          offsetTop={-30}
        ></Marker>
        <div>Yuric here</div>
        <NavigationControl position="bottom-right" />
        <GeolocateControl />
        <FullscreenControl />
      </Map>
    </Section>
  );
};

export default Maps;
const Section = styled.div`
  width: 100vw;
  height: 100vh;
`;
