import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useColorScheme } from "@/components/useColorScheme";
import { Avatar, NativeBaseProvider, extendTheme } from "native-base";
import { Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const theme = extendTheme({
    components: {
      Avatar: {
        defaultProps: {
          colorScheme: "#ec1b24",
        },
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen
            name="user/UserProfile"
            options={{
              headerShadowVisible: false,
              headerTransparent: false,
              headerTitle: "",
              headerLeft: () => (
                <Pressable onPress={router.back}>
                  {({ pressed }) => (
                    <Avatar
                      style={{ opacity: pressed ? 0.5 : 1 }}
                      backgroundColor="#ec1b24"
                    >
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="white"
                      />
                    </Avatar>
                  )}
                </Pressable>
              ),
              headerRight: () => (
                <Pressable>
                  {({ pressed }) => (
                    <MaterialIcons
                      name="more-horiz"
                      size={24}
                      color="black"
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="personal/PersonalDetails"
            options={{ title: "Personal Details" }}
          />
          <Stack.Screen
            name="bookings/Bookings"
            options={{
              headerLeft: () => (
                <Link href={"/(tabs)/"} asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <Avatar
                        style={{ opacity: pressed ? 0.5 : 1 }}
                        backgroundColor="#ec1b24"
                      >
                        <MaterialIcons
                          name="arrow-back"
                          size={24}
                          color="white"
                        />
                      </Avatar>
                    )}
                  </Pressable>
                </Link>
              ),

              headerShadowVisible: false,
              headerTransparent: false,
              headerTitle: "",

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
          <Stack.Screen
            name="payment/Payment"
            options={{
              headerLeft: () => (
                <Pressable onPress={() => router.back()}>
                  {({ pressed }) => (
                    <Avatar
                      style={{ opacity: pressed ? 0.5 : 1 }}
                      backgroundColor="#ec1b24"
                    >
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="white"
                      />
                    </Avatar>
                  )}
                </Pressable>
              ),

              headerShadowVisible: false,
              headerTransparent: false,
              headerTitle: "",

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
          <Stack.Screen
            name="events/SeeAllEvents"
            options={{
              headerLeft: () => (
                <Pressable onPress={() => router.back()}>
                  {({ pressed }) => (
                    <Avatar
                      style={{ opacity: pressed ? 0.5 : 1 }}
                      backgroundColor="#ec1b24"
                    >
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="white"
                      />
                    </Avatar>
                  )}
                </Pressable>
              ),

              headerShadowVisible: false,
              headerTransparent: false,
              headerTitle: "",

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
          <Stack.Screen
            name="catalog/ViewCatalog"
            options={{
              headerLeft: () => (
                <Pressable onPress={() => router.back()}>
                  {({ pressed }) => (
                    <Avatar
                      style={{ opacity: pressed ? 0.5 : 1 }}
                      backgroundColor="#ec1b24"
                    >
                      <MaterialIcons
                        name="arrow-back"
                        size={24}
                        color="white"
                      />
                    </Avatar>
                  )}
                </Pressable>
              ),

              headerShadowVisible: false,
              headerTransparent: false,
              headerTitle: "",

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
        </Stack>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
