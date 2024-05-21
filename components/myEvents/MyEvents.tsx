import React from "react";
import { View } from "../Themed";
import {
  AspectRatio,
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Divider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { space } from "native-base/lib/typescript/theme/styled-system";

export default function MyEvents() {
  const golfEvents = [
    {
      id: 1,
      event: "Putting Class",
      location: "Windsor Golf Club",
      date: "9th Sempeter 2023",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/0914d7e0-d298-4e81-8027-bad188e1502f.png",
    },
    {
      id: 2,
      event: "Putting Class",
      location: "Windsor Golf Club",
      date: "9th Sempeter 2023",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/b550c87a-be06-4e54-bd45-b91b6ba14eab.png",
    },
    {
      id: 3,
      event: "Putting Class",
      location: "Windsor Golf Club",
      date: "9th Sempeter 2023",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/601c754e-b8c4-4187-9ffa-a524b0203acf.png",
    },
    {
      id: 4,
      event: "Putting Class",
      location: "Windsor Golf Club",
      date: "9th Sempeter 2023",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/1e5f54b7-35bd-415b-840c-2359925c2644.png",
    },
  ];
  return (
    <View>
      <HStack justifyContent="space-between" mt="2.5">
        <HStack alignItems="center" space="1.5">
          <MaterialIcons name="calendar-month" color="#ec1b24" size={24} />
          <Text fontSize="xl" color="gray.500">
            My Calendar
          </Text>
        </HStack>
        <HStack alignItems="center" space="0">
          <Text fontSize="xl" color="#ec1b24">
            {" "}
            All Events
          </Text>
          <MaterialIcons name="chevron-right" color="#ec1b24" size={24} />
        </HStack>
      </HStack>
      <Divider mt={1.5} mb={1.5} />
      <View>
        {golfEvents.map((item) => (
          <View key={item.id}>
            <HStack space="2.5">
              <Box>
                <AspectRatio ratio={16 / 9} height={90}>
                  <Image
                    source={{ uri: item.image }}
                    alt="IMG"
                    borderRadius={10}
                  />
                </AspectRatio>
              </Box>
              <VStack style={{ height: 90 }} justifyContent="space-between">
                <Text ml="1.5" fontSize="xl" color="gray.500">
                  {item.event}
                </Text>
                <HStack space={"1.5"}>
                  <MaterialIcons
                    name="location-pin"
                    size={22}
                    color="#505050"
                  />
                  <Text>{item.location}</Text>
                </HStack>
                <HStack space={"1.5"}>
                  <MaterialIcons
                    name="calendar-month"
                    size={22}
                    color="#505050"
                  />
                  <Text>{item.date}</Text>
                </HStack>
              </VStack>
            </HStack>
            <Divider mt={2.5} mb={2.5} />
          </View>
        ))}
      </View>
    </View>
  );
}
