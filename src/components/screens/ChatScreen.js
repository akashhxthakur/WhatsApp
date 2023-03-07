import { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import React from "react";
import Message from "../Message";
import bg from "../../../assets/images/BG.png";
import messages from "../../../assets/data/messages.json";
import InputBox from "../InputBox";
const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={styles.bg}
    >
      <ImageBackground source={bg} style={StyleSheet.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
    height: "85%",
  },
});

export default ChatScreen;
