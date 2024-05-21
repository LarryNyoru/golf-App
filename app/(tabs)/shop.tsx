import React from "react";
import { View, Text } from "@/components/Themed";
import { StyleSheet } from "react-native";
import MyShop from "@/components/shop/MyShop";
import NewArrival from "@/components/shop/NewArrival";
import { ScrollView } from "native-base";
import Popular from "@/components/shop/Popular";

export default function Shop() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MyShop />
        <NewArrival />
        <Popular />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
