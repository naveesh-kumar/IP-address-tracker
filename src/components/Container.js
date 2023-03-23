import React, { useState } from "react";
import HeaderBar from "./HeaderBar";
import { styled } from "@mui/system";
import dynamic from "next/dynamic";

const ContainerDiv = styled("div")({
  width: "100%",
  height: "100vh",
});

const Container = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const Map = dynamic(() => import("./LeafletMap"), { ssr: false });
  return (
    <ContainerDiv>
      <HeaderBar data={data} setData={setData} />
      <Map lat={data.lat} lng={data.lng} city={data.city} />
    </ContainerDiv>
  );
};

export default Container;
