import React from "react";
import { View, Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
import SpotlightHome from "@/components/spotlight/SpotlightHome";
import { ScrollView } from "native-base";

export default function Spotlight() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SpotlightHome />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
