import React, { useState } from "react";
import {
  HStack,
  View,
  Text,
  Icon,
  Input,
  Pressable,
  Button,
  SimpleGrid,
  Avatar,
  Box,
  VStack,
  Flex,
} from "native-base";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

export default function ViewCatalog() {
  const [activeButton, setActiveButon] = useState(1);

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
    {
      id: 3,
      name: "Dunlop Men's Polo",
      price: "1,500",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/c1de5d25-cc28-4971-bacb-60dab20b5a96.png",
    },
    {
      id: 4,
      name: "Plastic Tees",
      price: "10,000",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/19b0feeb-4e26-4147-8a26-e12ac6df604a.jpg",
    },
  ];

  return (
    <View paddingLeft={15} paddingRight={15}>
      <View mt="2.5">
        <Input
          placeholder="Search"
          variant="filled"
          width="100%"
          rounded="full"
          py="1"
          px="2"
          size="xl"
          InputRightElement={
            <Icon
              marginRight="2.0"
              as={<FontAwesome name="search" size={24} color="black" />}
            />
          }
        />
      </View>
      <View mt="2.5">
        <HStack space={3}>
          <Button
            _text={{ color: activeButton === 1 ? "white" : "gray.500" }}
            size="sm"
            bgColor={activeButton === 1 ? "#ec1b24" : "white"}
            rounded="full"
            pl={5}
            pr={5}
            variant="outline"
            onPress={() => setActiveButon(1)}
          >
            All
          </Button>
          <Button
            _text={{ color: activeButton === 2 ? "white" : "gray.500" }}
            size="sm"
            variant="outline"
            bgColor={activeButton === 2 ? "#ec1b24" : "white"}
            rounded="full"
            onPress={() => setActiveButon(2)}
          >
            Golf Kits
          </Button>
          <Button
            _text={{ color: activeButton === 3 ? "white" : "gray.500" }}
            size="sm"
            variant="outline"
            rounded="full"
            bgColor={activeButton === 3 ? "#ec1b24" : "white"}
            onPress={() => setActiveButon(3)}
          >
            Golf Attire
          </Button>
          <Button
            _text={{ color: activeButton === 4 ? "white" : "gray.500" }}
            size="sm"
            variant="outline"
            rounded="full"
            bgColor={activeButton === 4 ? "#ec1b24" : "white"}
            onPress={() => setActiveButon(4)}
          >
            Golf Balls
          </Button>
        </HStack>
      </View>
      <View mt="3">
        <SimpleGrid columns={2} space={4} p={2}>
          {stock.map((item) => (
            <Box
              key={item.id}
              bgColor="#ffe9ec"
              borderRadius={10}
              overflow="hidden"
            >
              <Box width="100%" height={200}>
                <ImageBackground
                  source={{ uri: item.image }}
                  style={{ height: "100%", width: "100%" }}
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
        </SimpleGrid>
      </View>
    </View>
  );
}
