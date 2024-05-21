import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { View, Text, Flex, Box, HStack, Avatar, VStack } from "native-base";
import React from "react";
import { ImageBackground } from "react-native";

export default function Popular() {
  const popular = [
    {
      id: 1,
      name: "Dunlop Men's Polo",
      price: "1,500",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/c1de5d25-cc28-4971-bacb-60dab20b5a96.png",
    },
    {
      id: 2,
      name: "Plastic Tees",
      price: "10,000",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/19b0feeb-4e26-4147-8a26-e12ac6df604a.jpg",
    },
  ];
  return (
    <View mt="2.5" mb="2.5">
      <HStack justifyContent="space-between">
        <Text fontSize="xl" color="gray.500">
          Popular
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
        {popular.map((item) => (
          <Box key={item.id} bgColor="#ffe9ec" width={163} rounded="lg">
            <Box>
              <ImageBackground
                source={{ uri: item.image }}
                style={{ height: 163 }}
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
