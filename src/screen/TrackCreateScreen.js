// import "../_mockLocation";

import { View, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useCallback } from "react";

import { Text } from "react-native-elements";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { NavigationEvents, withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const { addLocation, state } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(callback, isFocused);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      {/* <NavigationEvents
        onWillBlur={() => console.log("Run a function when leaving the screen")}
      /> */}
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
});

export default withNavigationFocus(TrackCreateScreen);
