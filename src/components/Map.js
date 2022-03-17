import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      longitude: 37.33233 + i * 0.001,
      latitude: -122.03121 + i * 0.001,
    });
  }
  return (
    <>
      <MapView
        initialRegion={{
          latitude: 37.33233,
          longitude: -122.03121,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline coordinates={points} lineDashPattern={[1]} />
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
