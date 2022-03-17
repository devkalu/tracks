// import "../_mockLocation";

import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";

import { Text } from "react-native-elements";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [err, setErr] = useState();

  const startWatching = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          console.log(location);
        }
      );
      if (!granted) {
        throw new Error("Location permission not granted");
      }
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});

export default TrackCreateScreen;
