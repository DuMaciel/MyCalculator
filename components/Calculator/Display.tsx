import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../Themed";

export default function Display({
  operationString,
}: {
  operationString: string;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{operationString.replaceAll(".", ",")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "white",
    textAlign: "right",
  },
  container: {
    backgroundColor: "#333",
    borderRadius: 5,
    marginVertical: 5,
    padding: 20,
    width: "100%",
  },
});
