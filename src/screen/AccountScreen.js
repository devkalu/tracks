import { View, Text, StyleSheet, Button, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
