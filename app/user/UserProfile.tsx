import React from "react";
import { View, Text } from "native-base";
import { Stack, useRouter } from "expo-router";
import { Avatar, NativeBaseProvider, extendTheme } from "native-base";
import { Pressable, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PersonalInfo from "@/components/user/PersonalInfo";

export default function UserProfile() {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: "white",
      }}
    >
      <PersonalInfo />
    </SafeAreaView>
  );
}
