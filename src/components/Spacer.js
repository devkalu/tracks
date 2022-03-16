import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Spacer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});

export default Spacer;
