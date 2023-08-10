import { Pressable, Text, StyleSheet } from "react-native";
import React, { Component } from "react";

export const MainButton = ({ buttontitle, width, color, fontColor }) => {
  return (
    <Pressable
      style={[styles.button, { width: width, backgroundColor: color }]}
    >
      <Text style={[styles.buttontitle, { color: fontColor }]}>
        {buttontitle}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttontitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
