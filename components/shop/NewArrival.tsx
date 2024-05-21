import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { View, Text, Flex, Box, HStack, Avatar, VStack } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";

export default function NewArrival() {
  const stock = [
    {
      id: 1,
      name: "Shoes",
      price: "4,500",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/8fbb83c9-8b25-4499-bcd4-c58a21370b9d.png",
    },
    {
      id: 2,
      name: "Nike Duffel Bag",
      price: "10,000",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/5a41188c-622e-447f-88fc-29532b4cb8b0.png",
    },
  ];
  return (
    <View mt="2.5">
      <HStack justifyContent="space-between">
        <Text fontSize="xl" color="gray.500">
          New Arrivals
        </Text>
        <HStack alignItems="center" space="1.5">
          <Text fontSize="xl" color="#ec1b24">
            {" "}
            See all
          </Text>
          <MaterialIcons name="chevron-right" color="#ec1b24" size={28} />
        </HStack>
      </HStack>
      <HStack space="2.5">
        {stock.map((item) => (
          <Box key={item.id} bgColor="#ffe9ec">
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
            <Box p="2.5">
              <VStack space="1.5">
                <Text color="gray.500" fontSize="lg">
                  {" "}
                  {item.name}
                </Text>
                <HStack
                  space="2.5"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text color="gray.500" fontSize="lg">
                    {item.price}
                  </Text>
                  <Avatar bgColor="#ec1b24" size="sm">
                    <MaterialIcons name="add" size={24} color="white" />
                  </Avatar>
                </HStack>
              </VStack>
            </Box>
          </Box>
        ))}
      </HStack>
    </View>
  );
}
