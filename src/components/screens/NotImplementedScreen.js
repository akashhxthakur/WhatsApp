import { View, Text, Image, StyleSheet } from "react-native";

const NotImplementedScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/ORFI0N0.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    color: "gray",
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 2 / 1,
  },
});

export default NotImplementedScreen;
