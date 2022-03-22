import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import InnerContainer from "./InnerContainer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    changeName,
    startRecording,
    stopRecording,
    state: { name, recording, locations },
  } = useContext(LocationContext);
  console.log(locations.length);

  return (
    <>
      <Input
        placeholder="Enter a Title"
        onChangeText={changeName}
        value={name}
      />
      {recording ? (
        <Button title="Stop Recording" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

export default TrackForm;
