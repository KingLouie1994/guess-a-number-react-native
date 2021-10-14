import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

import Colors from "../constants/colors";

const GameOverScreen = ({ guessRounds, userNumber, restartGameHandler }) => {
  return (
      <ScrollView>
        <View style={styles.screen}>
          <TitleText>The Game is Over!</TitleText>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.resultContainer}>
            <BodyText style={styles.result}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{guessRounds}</Text> rounds to
              guess the number{" "}
              <Text style={styles.highlight}>{userNumber}</Text>
            </BodyText>
          </View>
          <MainButton onPress={restartGameHandler}>NEW GAME</MainButton>
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    borderRadius: (Dimensions.get("window").width * 0.4) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  result: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 600 ? 16 : 20,
  },
});

export default GameOverScreen;
