import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text, View } from "../Themed";

export default function OperationButton({
  title,
  onPress,
  col = 4,
  colspan = 1,
}: {
  title: string;
  onPress: () => void;
  col?: number;
  colspan?: number;
}) {
  const percentageWidth = (colspan / col) * 100;
  const dynamicStyles: ViewStyle = {
    width: `${percentageWidth}%`,
  };
  return (
    <View style={[dynamicStyles]}>
      <Pressable style={[styles.button]} onPress={onPress}>
        <Text style={[styles.buttonText]}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
