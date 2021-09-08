import React from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import Colors from "./../constants/color";
const Number = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Text style={styles.number}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  number: {
    fontSize: 30,
    color: Colors.primary,
    borderColor:Colors.primary,
    borderWidth:1,
    padding:20,
    borderRadius:15,
  },
  container: {
    marginTop: 10,
  },
});

export default Number;
