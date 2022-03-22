import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useContext } from "react";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <>
      <MapView
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Circle
          center={currentLocation.coords}
          radius={20}
          fillColor="red"
          strokeColor="white"
        />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
    width: "100%",
  },
});

export default Map;
