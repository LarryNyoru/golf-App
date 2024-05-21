import React from "react";

import {
  Text,
  HStack,
  View,
  AspectRatio,
  Image,
  Box,
  Center,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { Pressable } from "react-native";

export default function NearbyClubs() {
  const clubs = [
    {
      id: 1,
      name: "Windsor Golf Hotel and Country Club",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/82bde484-a1ba-4110-b160-34deb5dcb1e7.png",
    },
    {
      id: 2,
      name: "Muthaiga Golf Club",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/5d37a2c0-e935-42f5-8ad8-f0007a38a458.png",
    },
  ];
  return (
    <View mt="2.5">
      <HStack justifyContent="space-between" pb="2.5">
        <Text fontSize="xl" color="gray.500">
          Nearby Clubs
        </Text>
        <HStack alignItems="center" space="1.5">
          <Text fontSize="xl" color="#ec1b24">
            {" "}
            See all
          </Text>
          <MaterialIcons name="chevron-right" color="#ec1b24" size={28} />
        </HStack>
      </HStack>
      <HStack space="md">
        {clubs.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => router.push(`/details/${item.id}`)}
          >
            <Box key={item.id} style={{ width: 158 }}>
              <AspectRatio ratio={9 / 10}>
                <Image
                  source={{ uri: item.image }}
                  alt="IMG"
                  borderRadius={10}
                />
              </AspectRatio>
              <Center>
                <Text color="gray.500">{item.name}</Text>
              </Center>
            </Box>
          </Pressable>
        ))}
      </HStack>
    </View>
  );
}
