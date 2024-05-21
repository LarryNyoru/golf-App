import React from "react";
import {
  Avatar,
  View,
  Text,
  Center,
  HStack,
  VStack,
  Button,
  Box,
  Stack,
} from "native-base";
import {
  AntDesign,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function PersonalInfo() {
  const profile = [
    {
      id: 1,
      icon: () => <MaterialIcons name="person" size={24} color="#ec1b24" />,
      component: "Personal Details",
    },
    {
      id: 2,
      icon: () => (
        <MaterialIcons name="golf-course" size={24} color="#ec1b24" />
      ),
      component: "My Game",
    },
    {
      id: 3,
      icon: () => (
        <FontAwesome6 name="graduation-cap" size={24} color="#ec1b24" />
      ),
      component: "Golf Academy",
    },
    {
      id: 4,
      icon: () => (
        <MaterialIcons name="notifications" size={24} color="#ec1b24" />
      ),
      component: "Notifications",
    },
    {
      id: 5,
      icon: () => <AntDesign name="like1" size={24} color="#ec1b24" />,
      component: "Referrals",
    },
  ];
  return (
    <View pt="2.5">
      <Center>
        <Avatar
          source={{
            uri: "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
          }}
          size="xl"
        >
          <Avatar.Badge bg="#efc94c" />
        </Avatar>
        <Text fontSize="xl" color="gray.500">
          David Ochieng
        </Text>
        <Text color="gray.400">Cohort 61</Text>
      </Center>
      <HStack justifyContent="space-between">
        <VStack>
          <Avatar rounded="sm" bg="white" size="lg">
            <MaterialCommunityIcons name="qrcode" size={40} color="black" />
          </Avatar>
          <Text color="gray.500">Yen Club</Text>
        </VStack>
        <VStack>
          <Avatar
            _text={{ color: "gray.500" }}
            alignItems="center"
            alignContent="center"
            bgColor="white"
            borderWidth={2}
            borderColor="#ec1b24"
            size="lg"
          >
            48.4
          </Avatar>
          <Text color="gray.500">HCP Index</Text>
        </VStack>
        <VStack>
          <Avatar
            _text={{ color: "gray.500" }}
            alignItems="center"
            alignContent="center"
            bgColor="white"
            borderWidth={2}
            borderColor="#ec1b24"
            size="lg"
          >
            500
          </Avatar>
          <Text color="gray.500">Yents Earned</Text>
        </VStack>
      </HStack>

      <View mt="4">
        <Stack space="2.5">
          {profile.map((item) => (
            <Link key={item.id} href="/personal/PersonalDetails" asChild>
              <TouchableOpacity>
                <Box bg="gray.100" rounded="full" key={item.component}>
                  <HStack justifyContent="space-between" p="4">
                    <HStack space="2.5">
                      {item.icon()}
                      <Text color="gray.500"> {item.component}</Text>
                    </HStack>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color="black"
                    />
                  </HStack>
                </Box>
              </TouchableOpacity>
            </Link>
          ))}
        </Stack>
      </View>
    </View>
  );
}
