import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { NavigationEvents } from "react-navigation";

import InnerContainer from "../components/InnerContainer";

import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import Navlink from "../components/Navlink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <InnerContainer>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          header="Sign Up for Tracker"
          buttonTitle="Sign Up"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signup({ email, password })}
          navigate={() => navigation.navigate("Signin")}
        />
        <Navlink
          text="Already have an account then sign in."
          route={"Signin"}
        />
      </InnerContainer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
  },
});

export default SignupScreen;
