import { View, Text, FlatList } from "react-native";
import React from "react";
import chats from "../../../assets/data/chats.json";
import ChatListitem from "../ChatListitem";

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListitem chat={item} />}
      style={{ borderRightColor: "white" }}
    />
  );
};
export default ChatsScreen;
