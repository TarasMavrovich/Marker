import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { Map } from "./Map/Map.tsx";

const App: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCLdZHeJ90Xd3I8DUPRAJWAUC57DXHLZoo",
  });

  return <div>{isLoaded ? <Map /> : <h2>Loading...</h2>}</div>;
};

export default App;
