import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListitem";
import ChatsScreen from "./src/components/screens/ChatsScreen";
import ChatScreen from "./src/components/screens/ChatScreen";
import Navigator from "./src/navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
  },
});
