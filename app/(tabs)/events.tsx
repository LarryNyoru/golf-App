import React from "react";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import EventsHero from "@/components/events/EventsHero";
import { ScrollView } from "native-base";
import NetworkingEvents from "@/components/events/NetworkingEvents";
import Tournaments from "@/components/events/Tournaments";

export default function Events() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EventsHero />
        <NetworkingEvents />
        <Tournaments />
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
