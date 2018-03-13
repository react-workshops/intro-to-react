import React from "react";
import { Text, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  text: { color: "blue", fontWeight: "bolder" },
  container: {
    borderWidth: 1,
    marginVertical: 50,
    minHeight: 300,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  item: { borderWidth: 1, borderColor: "blue" },
  redItem: { borderColor: "red", alignSelf: "flex-end" },
  greenItem: { borderColor: "green", alignSelf: "stretch" }
});

const StyleExample = () => (
  <View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.text}>Hello world</Text>
    </View>
    <View style={[styles.item, styles.greenItem, { flex: 1, maxHeight: 200 }]}>
      <Text>Green Item</Text>
    </View>
    <View style={[styles.item, styles.redItem]}>
      <Text>Red Item</Text>
    </View>
  </View>
);

export default StyleExample;
