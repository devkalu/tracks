import { View, StyleSheet } from "react-native";
import React, { useState, useContext } from "react";

import InnerContainer from "../components/InnerContainer";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <InnerContainer>
        <AuthForm
          header="Sign In to Tracker"
          emailVal={email}
          passwordVal={password}
          onChangeEmail={(text) => setEmail(text)}
          buttonTitle="Sign In"
          linkContent="Don't have an account, then create a new account"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signin({ email, password })}
          onChangePassword={(text) => setPassword(text)}
          navigate={() => navigation.navigate("Signup")}
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
