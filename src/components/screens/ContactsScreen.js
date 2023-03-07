import { FlatList } from "react-native";
import chats from "../../../assets/data/chats.json";

import React from "react";
import ContactListItem from "../ContactListItem";

const ContactsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ContactListItem user={item.user} />}
      style={{ borderRightColor: "white" }}
    />
  );
};

export default ContactsScreen;
