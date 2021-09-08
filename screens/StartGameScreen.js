import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Button,
  TouchableWithoutFeedbackBase,
  Keyboard,
} from "react-native";
import Card from "./../components/Card";
import Input from "../components/Input";
import Colors from "./../constants/color";
const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    if (enteredValue === NaN || enteredValue <= 0 || enteredValue > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedText;
  if (confirmed) {
    confirmedText = <Text>Chosen Number: {selectedNumber}</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text styles={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text> Select a Number </Text>
          <Input
            onChangeText={numberInputHandler}
            value={enteredValue}
            input={styles.input}
            blurOnSubmit
            autoCapitalise="none"
            autoCorrect={false}
            maxLength={2}
            keyboardType="numeric"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button
                onPress={confirmInputHandler}
                title="Confirm"
                color={Colors.primary}
              ></Button>
            </View>
          </View>
        </Card>
        {confirmedText}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: { width: 300, maxWidth: "80%", alignItems: "center" },
  title: {
    fontSize: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100 %",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "100",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
