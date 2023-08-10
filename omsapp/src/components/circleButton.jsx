import { Text, StyleSheet, View, Pressable } from "react-native";
import React, { Component } from "react";

export default class CircleButton extends Component {
  render() {
    return (
      <View>
        <Pressable
          style={[styles.button, { backgroundColor: this.props.color }]}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
            ←
          </Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});
