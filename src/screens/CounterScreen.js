import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Counter screen: {counter}</Text>
    </View>
  );
};
export default CounterScreen;
