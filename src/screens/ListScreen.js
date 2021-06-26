import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const ListName = [
    { name: "Nguyễn Quang Hoà", age: 18 },
    { name: "Trần Đình Hùng", age: 22 },
    { name: "Dương Đình Bảo", age: 20 },
    { name: "Nguyễn Văn Mạnh", age: 19 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={ListName}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Tên:{item.name} - Tuồi: {item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
export default ListScreen;
