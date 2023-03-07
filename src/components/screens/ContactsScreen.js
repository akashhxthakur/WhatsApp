import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import chats from "../../../assets/data/chats.json";

import React from "react";
import ContactListItem from "../ContactListItem";
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "../../graphql/queries";
const ContactsScreen = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.graphql(graphqlOperation(listUsers)).then((result) => {
      console.log(result);
      setUsers(result.data?.listUsers?.items);
    });
  }, []);
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ borderRightColor: "white" }}
    />
  );
};

export default ContactsScreen;
