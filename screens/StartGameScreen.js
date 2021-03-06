import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
  Button,
  TouchableWithoutFeedbackBase,
  Alert,
  Keyboard,
} from "react-native";
import Card from "./../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
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
    if (isNaN(enteredValue) || enteredValue <= 0 || enteredValue > 99) { 
      Alert.alert('Invalid Number','Number has to be between 1 and 99', [{text:'Okay', style:'destructive', onPress:resetInputHandler}])
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedText;
  if (confirmed) {
    confirmedText = <Card style={styles.numberCard}>
      <Text>You Selected</Text>
      <Number number = {selectedNumber} style={styles.number}></Number>
      <Button title = "START GAME" onPress = { () => {props.onStartGame(selectedNumber)}}></Button>
    </Card>;
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
  numberCard:{
    width:200,
    marginTop:20,
    alignItems:"center"
  },
  number:{

  }
});

export default StartGameScreen;
