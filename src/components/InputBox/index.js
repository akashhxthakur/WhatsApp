import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const InputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.log("Sending a message:", newMessage);
    setNewMessage("");
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AntDesign name="plus" size={20} color="royalblue" />
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
          placeholder="type your message..."
        />
        <MaterialIcons
          onPress={onSend}
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    // paddingHorizontal: 15,
    paddingVertical: 20,
    bottom: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
export default InputBox;
