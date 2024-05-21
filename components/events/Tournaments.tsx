import React from "react";
import { View, Text, Flex, Box, HStack, Avatar, VStack } from "native-base";
import { ImageBackground } from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
export default function Tournaments() {
  const tournamnets = [
    {
      id: 1,
      venue: "Royal Golf Club",
      date: "24th July 2024",
      price: "2000 - 3,500",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/09688219-9b5e-4b0c-a9f4-680729dccada.png",
    },
    {
      id: 2,
      venue: "Royal Golf Club",
      date: "24th July 2024",
      price: "2000 - 3,500",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/1c6ef306-7714-4036-905d-78642608b381.png",
    },
  ];
  return (
    <View pt="2.5" mb="3.5">
      <Text fontSize="xl" color="gray.500" pb="2.5">
        Tournaments
      </Text>
      <HStack space="2.5">
        {tournamnets.map((item) => (
          <Box key={item.id}>
            <Box>
              <ImageBackground
                source={{ uri: item.image }}
                style={{ height: 163, width: 163 }}
                imageStyle={{ borderRadius: 10 }}
              >
                <Flex align="flex-end">
                  <Avatar bg="white" m="2.0">
                    <FontAwesome name="heart-o" size={24} color="#ec1b24" />
                  </Avatar>
                </Flex>
              </ImageBackground>
            </Box>
            <Box>
              <VStack space="2.5">
                <HStack space="2.5" alignItems="center">
                  <MaterialIcons name="location-on" size={22} color="#ec1b24" />
                  <Text color="gray.500">{item.venue}</Text>
                </HStack>
                <HStack space="2.5" alignItems="center">
                  <MaterialIcons
                    name="calendar-month"
                    color="#ec1b24"
                    size={22}
                  />
                  <Text color="gray.500">{item.date}</Text>
                </HStack>
                <HStack space="2.5" alignItems="center">
                  <FontAwesome5 name="coins" size={22} color="#ec1b24" />
                  <Text color="gray.500">ksh {item.price}</Text>
                </HStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </HStack>
    </View>
  );
}
