import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";

const myIcon = new L.Icon({
  iconUrl: "/icons/icon-location.svg",
  popupAnchor: [-0, -0],
  iconSize: [30, 35],
});

const { BaseLayer } = LayersControl;

const LeafletMap = ({ lat, lng, city }) => {
  const position = [lat, lng];

  return (
    <MapContainer
      center={position}
      zoom={8}
      scrollWheelZoom={true}
      style={{ height: "60%" }}
      zoomControl={false}
    >
      <LayersControl>
        <BaseLayer checked name="Open street map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors |  
        <a href="https://www.linkedin.com/in/naveesh-kumar-v-162476117/" target="blank" rel=“noreferrer”>Naveesh Kumar V</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </BaseLayer>
        <BaseLayer name="NASA blue marble">
          <TileLayer
            attribution="© NASA Blue Marble, image service by OpenGeo"
            url="https://gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default//EPSG3857_500m/{z}/{y}/{x}.jpeg"
            maxNativeZoom={8}
          />
        </BaseLayer>
      </LayersControl>

      <ZoomControl position="bottomright" />
      <Marker position={position} icon={myIcon}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
