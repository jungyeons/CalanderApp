/* eslint-disable react/prop-types */
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const ButtonTypes = {
  NUMBER: "NUMBER",
  OPERATOR: "OPERATOR",
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      style={({ presssed }) => [
        styles.button,
        {
          backgroundColor:
            buttonType === ButtonTypes.NUMBER ? "#71717a" : "#f59e0b",
        },
        presssed && {
          backgroundColor:
            buttonType === ButtonTypes.NUMBER ? "#3f3f46" : "#b45309",
        },
        buttonStyle,
      ]}
      onPressOut={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.NUMBER,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 50,
  },
});

export { ButtonTypes };
export default Button;