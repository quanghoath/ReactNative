import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const greeting = "My name is Hoa";
  return (
    <View>
      <Text style={styles.textStyle}>Nội dung 1</Text>
      <Text style={styles.subHeaderStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentScreen;
