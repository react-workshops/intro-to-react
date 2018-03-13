class SwiftLyrics extends React.Component {
  state = {
    lyrics: null
  };
  async componentDidMount() {
    const artist = "Taylor Swift";
    console.log(this.props.title);
    const resp = await fetch(
      `https://api.lyrics.ovh/v1/${artist}/${this.props.title}`
    );
    const data = await resp.json();
    this.setState({ lyrics: data.lyrics });
  }
  render() {
    const { lyrics } = this.state;
    if (!lyrics) {
      return <Text>Loading</Text>;
    }
    return <Text>{lyrics}</Text>;
  }
}

class SongInput extends React.Component {
  state = { text: "" };
  render() {
    return (
      <View>
        <Text>What Taylor Swift song?</Text>
        <TextInput value={this.state.text} onChangeText={this._onNameChange} />
        <Button onPress={this._onSubmit} title="Create" />
      </View>
    );
  }
  _onNameChange = name => {
    this.setState({
      text: name
    });
  };
  _onSubmit = () => {
    this.setState({ text: "" });
    this.props.onSong(this.state.text);
  };
}
import React from "react";
import { Text, Button, TextInput, View } from "react-native";

class SwiftLyricsApp extends React.Component {
  state = {
    song: null
  };
  _setSong = song => {
    this.setState({ song });
  };
  render() {
    const { song } = this.state;
    if (!song) {
      return <SongInput onSong={this._setSong} />;
    }
    return (
      <React.Fragment>
        <a
          href={`https://www.youtube.com/results?search_query=Taylor Swift${song}`}
        >
          Listen on Youtube
        </a>
        <SwiftLyrics title={song} />
      </React.Fragment>
    );
  }
}

export default SwiftLyricsApp;
