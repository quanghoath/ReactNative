import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen1</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to component screen"
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to list screen"
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to image screen"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to counter screen"
      />
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('List')
        }}
      >
        <Text>Go to list screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
});

export default HomeScreen;
