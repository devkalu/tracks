import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { navigate } from "../navigationRef";

import Spacer from "./Spacer";

const AuthForm = ({
  header,

  buttonTitle,
  linkContent,
  errorMessage,
  onSubmit,
  navigate,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3 style={styles.header}>
          {header}
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      <TouchableOpacity onPress={navigate}>
        <Spacer>
          <Text style={styles.link}>{linkContent}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
  },

  errorMessage: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 15,
    fontSize: 16,
  },
  link: {
    color: "blue",
    fontSize: 16,
  },
});

export default AuthForm;
