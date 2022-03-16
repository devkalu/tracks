import { View, StyleSheet } from "react-native";
import React, { useContext } from "react";

import InnerContainer from "../components/InnerContainer";

import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <InnerContainer>
        <AuthForm
          header="Sign Up for Tracker"
          buttonTitle="Sign Up"
          linkContent="Already have an account then sign in instead"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signup({ email, password })}
          navigate={() => navigation.navigate("Signin")}
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
