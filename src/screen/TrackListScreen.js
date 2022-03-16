import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to login flow"
        onPress={() => navigation.navigate("loginFlow")}
      />
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
