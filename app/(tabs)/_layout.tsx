import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, useRouter } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Avatar, Image, Text, AspectRatio, HStack } from "native-base";
import { View } from "@/components/Themed";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Image
              alt="Logo"
              source={{
                uri: "https://golf.yenafrica.net/assets/img/logo.png",
              }}
              width={190}
              height={10}
            />
          ),
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerTransparent: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={22} />
          ),

          headerRight: () => (
            <Link href="/user/UserProfile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Avatar
                    source={{
                      uri: "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
                    }}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="book"
        options={{
          title: "Book a Tee",

          headerShadowVisible: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="golf-ball" color={color} size={22} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Avatar
                    source={{
                      uri: "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
                    }}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerTitle: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Avatar
                  style={{ opacity: pressed ? 0.5 : 1 }}
                  backgroundColor="#ec1b24"
                >
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                </Avatar>
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          headerTitle: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Avatar
                  style={{ opacity: pressed ? 0.5 : 1 }}
                  backgroundColor="#ec1b24"
                >
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                </Avatar>
              )}
            </Pressable>
          ),

          headerShadowVisible: false,
          headerTransparent: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" color={color} size={22} />
          ),

          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Avatar
                    source={{
                      uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    }}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          headerTitle: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Avatar
                  style={{ opacity: pressed ? 0.5 : 1 }}
                  backgroundColor="#ec1b24"
                >
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                </Avatar>
              )}
            </Pressable>
          ),

          headerShadowVisible: false,
          headerTransparent: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-cart" color={color} size={22} />
          ),

          headerRight: () => (
            <HStack space="2.5">
              <View>
                <MaterialIcons name="shopping-cart" size={42} color="#ec1b24" />
              </View>
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Avatar
                      source={{
                        uri: "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
                      }}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            </HStack>
          ),
        }}
      />
      <Tabs.Screen
        name="spotlight"
        options={{
          title: "SpotLight",

          headerShadowVisible: false,
          headerTransparent: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="trophy" color={color} size={22} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Avatar
                    source={{
                      uri: "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
                    }}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          headerTitle: () => (
            <Pressable onPress={() => router.back()}>
              {({ pressed }) => (
                <Avatar
                  style={{ opacity: pressed ? 0.5 : 1 }}
                  backgroundColor="#ec1b24"
                >
                  <MaterialIcons name="arrow-back" size={24} color="white" />
                </Avatar>
              )}
            </Pressable>
          ),
        }}
      />
    </Tabs>
  );
}
