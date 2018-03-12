import React from "react";
import { View, TouchableOpacity } from "react-native";

const Card = ({ children, onPress }) => {
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
  return (
    <View
      style={{ borderWidth: 1, borderColor: "#ccc", padding: 20, margin: 20 }}
      children={children}
    />
  );
};

export default Card;
