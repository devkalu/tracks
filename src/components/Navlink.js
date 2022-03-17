import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const Navlink = ({ navigation, text, route }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Spacer>
          <Text style={styles.link}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
    fontSize: 16,
  },
});

export default withNavigation(Navlink);
