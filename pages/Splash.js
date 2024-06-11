import { Platform, StyleSheet, View } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

// "splash": {
//   "image": "./assets/splash.png",
//   "resizeMode": "contain",
//   "backgroundColor": "#ffffff"
// },

const Splash = () => {
  return (
    <View style={styles.customStyleProp}>
      {Platform.OS === "web" && (
        <View style={styles.webStyleProp}>
          <MaterialCommunityIcons name="web" size={320} color="white" />
        </View>
      )}
      {Platform.OS === "ios" && (
        <View style={styles.iosStyleProp}>
          <FontAwesome name="apple" size={320} color="white" />
        </View>
      )}
      {Platform.OS === "android" && (
        <View style={styles.androidStyleProp}>
          <FontAwesome name="android" size={320} color="white" />
        </View>
      )}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  webStyleProp: {
    flex: 1,
    backgroundColor: "lightgray",
    padding: 0,
    margin: 0,
    width: "100%",
    // height: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iosStyleProp: {
    flex: 1,
    backgroundColor: "lightblue",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  androidStyleProp: {
    // flex: 1,
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "lightgreen",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  customStyleProp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
});
