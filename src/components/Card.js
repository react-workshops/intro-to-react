import React from "react";
import { View, TouchableOpacity } from "react-native";
import SiteWidth from "./SiteWidth";

const Card = ({ children, onPress }) => {
  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
  }
  return (
    <SiteWidth>
      <View
        style={{ borderWidth: 1, borderColor: "#ccc", padding: 20, margin: 20 }}
        children={children}
      />
    </SiteWidth>
  );
};

export default Card;
