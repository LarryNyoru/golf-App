import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { Center, Divider, ScrollView } from "native-base";

import BoookingsHero from "@/components/bookings/BoookingsHero";
import NearbyClubs from "@/components/bookings/NearbyClubs";
import RatedClubs from "@/components/bookings/RatedClubs";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <BoookingsHero />
        <NearbyClubs />
        <Center>
          <Divider
            mt="2.0"
            backgroundColor="#c1c1c1"
            thickness="3.0"
            width={150}
          />
        </Center>
        <RatedClubs />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,

    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
