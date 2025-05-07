import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Sentry from "@sentry/react-native";
// import nearpay from "./nearpay";

export default function App() {
  Sentry.init({
    dsn: "dsn",
    // Adds more context data to events (IP address, cookies, user, etc.)
    // For more information, visit: https://docs.sentry.io/platforms/react-native/data-management/data-collected/
    sendDefaultPii: true,
  });
  console.warn("sentry set correctly");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
