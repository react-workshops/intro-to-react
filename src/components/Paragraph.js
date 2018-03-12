import React from "react";
import { Text } from "react-native";

const Paragraph = ({ children }) => (
  <Text style={{ padding: 20 }} children={children} />
);

export default Paragraph;
