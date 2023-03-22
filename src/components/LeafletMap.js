import { useMediaQuery } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { theme } from "../theme/theme";
import L from "leaflet";

const myIcon = new L.Icon({
  iconUrl: "/icons/icon-location.svg",
  popupAnchor: [-0, -0],
  iconSize: [30, 35],
});

const LeafletMap = ({ lat, lng, city }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const position = [lat ?? 51.513, lng ?? -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: isMobile ? "60%" : "70%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors |  
        <a href="https://www.linkedin.com/in/naveesh-kumar-v-162476117/" target="blank" rel=“noreferrer”>Naveesh Kumar V</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lng && (
        <Marker position={position} icon={myIcon}>
          <Popup>{city}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LeafletMap;
