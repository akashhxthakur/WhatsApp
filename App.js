import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/components/ChatListitem";
import ChatsScreen from "./src/components/screens/ChatsScreen";
import ChatScreen from "./src/components/screens/ChatScreen";
import Navigator from "./src/navigation";
import { Amplify, Auth, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";
import { useEffect } from "react";

Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
function App() {
  useEffect(() => {
    const syncUser = async () => {
      //get Auth User
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      console.log(authUser);

      // wuery the database using Auth user id (sub)
      const userData = await API.graphql(
        graphqlOperation(getUser, { id: authUser.attributes.sub })
      );
      console.log(userData);
      if (userData.data.getUser) {
        console.log("user already exists in database");
        return;
      }

      //if there is no users in db, create one
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hey there! I'm new to whatsapp.",
      };
      console.log(newUser);
      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      );
    };
    syncUser();
  }, []);
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
export default withAuthenticator(App);
