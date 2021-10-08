import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOverScreen = ({ guessRounds, userNumber, restartGameHandler }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={restartGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
