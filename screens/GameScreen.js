import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import Colors from "./../constants/color";
import Number from "./../components/Number";
import Card from "./../components/Card";
function randomGenerator(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return randomGenerator(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    randomGenerator(1, 100, props.userChoice)
  );
  const [winnerMessage, setWinnerMessage] = useState(false)
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie!", "You know this is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    setCurrentGuess(randomGenerator(currentLow.current, currentHigh.current, currentGuess))
  };

  useEffect(()=>{
    if (currentGuess === props.userChoice){
      setWinnerMessage(true)
    }
  })

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Number number={currentGuess}></Number>
      <Card style={styles.buttonContainer}>
        <Button
          title="Lower"
          onPress={nextGuessHandler.bind(this, "lower")}
        ></Button>
        <Button
          title="Higher"
          onPress={nextGuessHandler.bind(this, "greater")}
        ></Button>
      </Card>

      {winnerMessage && <Card style = {styles.winnerCard}>
        <Text>Congratulations</Text>
        <Text>You Won</Text>
      </Card>}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  winnerCard:{
    backgroundColor:'#FFD700',
    marginTop:30,
  }
});

export default GameScreen;
