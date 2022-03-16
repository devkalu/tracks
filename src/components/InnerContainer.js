import { View, Text, StyleSheet } from "react-native";
import React from "react";

const InnerContainer = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default InnerContainer;
