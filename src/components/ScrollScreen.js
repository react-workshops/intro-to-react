import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import "font-awesome/css/font-awesome.css";
import SiteWidth from "./SiteWidth";
const FontAwesome = require("react-fontawesome");

const FooterButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: "#555599",
        borderRadius: 5
      }}
    >
      <Text style={{ color: "white" }}>{children}</Text>
    </TouchableOpacity>
  );
};

const Footer = ({ navigation }) => {
  if (!navigation) {
    return null;
  }
  const openChapter = navigation.Chapters[navigation.openChapterIndex];
  if (openChapter == null) {
    return null;
  }
  const prevModule = navigation.Chapters[navigation.openChapterIndex - 1];
  const nextModule = navigation.Chapters[navigation.openChapterIndex + 1];
  return (
    <SiteWidth>
      <View
        style={{
          padding: 20,
          justifyContent: "space-between",
          flexDirection: "row"
        }}
      >
        {prevModule && (
          <FooterButton
            onPress={() => {
              navigation.onSetChapter(prevModule.routeName);
            }}
          >
            Previous
          </FooterButton>
        )}
        <FooterButton
          onPress={() => {
            window.location = `https://github.com/react-workshops/intro-to-react/tree/master/src/${navigation.openChapterIndex +
              1}_${openChapter.routeName}.js`;
          }}
        >
          See this code
        </FooterButton>
        {nextModule && (
          <FooterButton
            onPress={() => {
              navigation.onSetChapter(nextModule.routeName);
            }}
          >
            Next
          </FooterButton>
        )}
      </View>
    </SiteWidth>
  );
};

export default class ScrollScreen extends React.Component {
  render() {
    const { title, children, navigation } = this.props;
    return (
      <React.Fragment>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#bbb"
          }}
        >
          <SiteWidth>
            <View
              style={{
                flexDirection: "row",
                padding: 20
              }}
            >
              {navigation &&
                navigation.openChapterIndex !== null && (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.onSetChapter(null);
                    }}
                    style={{ paddingHorizontal: 20 }}
                  >
                    <FontAwesome
                      name="angle-left"
                      size="3x"
                      style={{ color: "#8888cc", borderWidth: 1 }}
                    />
                  </TouchableOpacity>
                )}
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "400",
                  textAlign: "left",
                  color: "#222"
                }}
              >
                {title}
              </Text>
              <View style={{ flex: 1 }} />
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "200",
                  textAlign: "right",
                  color: "#444",
                  marginHorizontal: 10
                }}
              >
                Intro to JS and React
              </Text>
              <svg
                version="1.1"
                width="50px"
                height="50px"
                viewBox="0 0 184 166"
              >
                <g transform="translate(92 83)">
                  <circle fill="#444" r="16" />
                  <g fill="none" stroke="#444" stroke-width="5">
                    <ellipse rx="84" ry="32" />
                    <ellipse rx="84" ry="32" transform="rotate(120)" />
                    <ellipse rx="84" ry="32" transform="rotate(60)" />
                  </g>
                </g>
              </svg>
            </View>
          </SiteWidth>
        </View>

        <View>{children}</View>
        <Footer navigation={navigation} />
      </React.Fragment>
    );
  }
}
