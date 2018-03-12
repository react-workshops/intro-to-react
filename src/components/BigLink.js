import React from "react";
import { Text } from "react-native";

const BigLink = ({ children, to }) => (
  <a href={to}>
    <Text style={{ padding: 20 }} children={children || to} />
  </a>
);

export default BigLink;
