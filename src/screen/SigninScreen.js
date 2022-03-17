import { View, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { NavigationEvents } from "react-navigation";

import InnerContainer from "../components/InnerContainer";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import Navlink from "../components/Navlink";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <InnerContainer>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          header="Sign In to Tracker"
          emailVal={email}
          passwordVal={password}
          onChangeEmail={(text) => setEmail(text)}
          buttonTitle="Sign In"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signin({ email, password })}
          onChangePassword={(text) => setPassword(text)}
          navigate={() => navigation.navigate("Signup")}
        />
        <Navlink
          text="Don't have an account? Sign up instead"
          route={"Signup"}
        />
      </InnerContainer>
    </View>
  );
};
SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
