import React from "react";
import { View } from "react-native";

const SiteWidth = ({ children }) => {
  return (
    <View
      style={{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
      }}
    >
      <View
        style={{
          maxWidth: 1000,
          flex: 1
        }}
        children={children}
      />
    </View>
  );
};

export default SiteWidth;
