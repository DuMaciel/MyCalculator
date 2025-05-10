import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import NumericButton from "@/components/Calculator/NumericButton";
import { useState } from "react";
import OperationButton from "@/components/Calculator/OperationButton";
import Display from "@/components/Calculator/Display";

export default function TabOneScreen() {
  const operationList = ["+", "-", "*", "/"];
  const [operationCompleted, setOperationCompleted] = useState(false);
  const [operationString, setOperationString] = useState("");
  const onPressNumberHandler = (value: number) => {
    if (operationCompleted) {
      setOperationString(value.toString());
      setOperationCompleted(false);
      return;
    }
    setOperationString(operationString + value);
  };
  const onPressHandler = (value: string) => {
    setOperationCompleted(false);
    const lastChar = operationString[operationString.length - 1];
    if (operationList.includes(lastChar)) {
      setOperationString(operationString.slice(0, -1) + value);
      return;
    }
    if (lastChar === "." && value === ".") {
      return;
    }
    setOperationString(operationString + value);
  };
  const onPressEqualHandler = () => {
    const result = eval(operationString);
    setOperationString(result.toString());
    setOperationCompleted(true);
  };
  return (
    <View style={styles.container}>
      <Display operationString={operationString}></Display>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.grid}>
        <NumericButton value={7} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={8} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={9} onPress={onPressNumberHandler}></NumericButton>
        <OperationButton
          title="/"
          onPress={() => {
            onPressHandler("/");
          }}
        ></OperationButton>
        <NumericButton value={4} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={5} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={6} onPress={onPressNumberHandler}></NumericButton>
        <OperationButton
          title="*"
          onPress={() => {
            onPressHandler("*");
          }}
        ></OperationButton>
        <NumericButton value={1} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={2} onPress={onPressNumberHandler}></NumericButton>
        <NumericButton value={3} onPress={onPressNumberHandler}></NumericButton>
        <OperationButton
          title="-"
          onPress={() => {
            onPressHandler("-");
          }}
        ></OperationButton>

        <NumericButton
          value={0}
          colspan={2}
          onPress={onPressNumberHandler}
        ></NumericButton>
        <OperationButton
          title=","
          onPress={() => {
            onPressHandler(".");
          }}
        ></OperationButton>
        <OperationButton
          title="+"
          onPress={() => {
            onPressHandler("+");
          }}
        ></OperationButton>
        <OperationButton
          title="C"
          onPress={() => {
            setOperationString("");
          }}
        ></OperationButton>
        <OperationButton
          title="⌫"
          onPress={() => {
            setOperationString(operationString.slice(0, -1));
          }}
        ></OperationButton>
        <OperationButton
          title="="
          colspan={2}
          onPress={onPressEqualHandler}
        ></OperationButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: "80%",
  },
});
