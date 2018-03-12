import React from "react";
import { Text } from "react-native";

const Title = ({ children }) => (
  <Text style={{ padding: 20, fontSize: 40 }} children={children} />
);

export default Title;
