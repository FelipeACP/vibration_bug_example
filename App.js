import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NotificationExample } from "./NotificationExample";

export default function App() {
  return (
    <View style={styles.container}>
      <NotificationExample />
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
