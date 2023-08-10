import React, { useState, useRef } from "react";
import { Animated, Easing, TextInput, StyleSheet } from "react-native";

const MyInput = ({
  label,
  isSensible,
  titleActiveSize = 12,
  titleInActiveSize = 14,
  titleActiveColor = "#444444",
  titleInactiveColor = "#000000",
}) => {
  // TODO: Modificar el useState a un useRef y ver como eficientizo eso
  const [text, onChangeText] = React.useState("");
  const animatedValue = useRef(new Animated.Value(0));

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [15, -25],
          extrapolate: "clamp",
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: "clamp",
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    paddingLeft: animatedValue?.current.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 5],
    }),
  };

  const viewStyles = {
    borderColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    borderWidth: 1,
    borderRadius: 10,
  };
  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!text) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <Animated.Text style={[returnAnimatedTitleStyles]}>{label}</Animated.Text>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        style={styles.textStyle}
        onBlur={onBlur}
        onFocus={onFocus}
        secureTextEntry={isSensible}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    width: 250,
  },
  textStyle: {
    fontSize: 16,
  },
});

export default MyInput;
