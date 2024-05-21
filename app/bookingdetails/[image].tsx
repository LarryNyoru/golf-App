import React from "react";
import { View, Text, Box, Image } from "native-base";
import { Stack, useLocalSearchParams } from "expo-router";
export default function Details() {
  const params = useLocalSearchParams();
  return (
    <View paddingLeft={15} paddingRight={15}>
      <Stack.Screen
        options={{ headerShadowVisible: false, headerTransparent: false }}
      />
      <Text>{params.image}</Text>
      
    </View>
  );
}
