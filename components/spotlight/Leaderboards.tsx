import React from "react";
import {
  View,
  Text,
  Avatar,
  HStack,
  VStack,
  Stack,
  Divider,
  Box,
} from "native-base";

export default function Leaderboards() {
  const users = [
    {
      id: 1,
      name: "Eve Wawira",
      points: "40",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/6b1fbf2d-2139-4721-9051-fd8208c3d0a3.png",
    },
    {
      id: 2,
      name: "Daniel Makasi",
      points: "38",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/d44346ef-0af6-4766-a563-bd1c54fb4be8.png",
    },
    {
      id: 3,
      name: "Rohil Shash",
      points: "44",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/1ad689e0-b336-4524-9937-298109c0038d.png",
    },
    {
      id: 4,
      name: "Eve Wawira",
      points: "40",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
    },
    {
      id: 5,
      name: "David Ochieng",
      points: "48",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/6b1fbf2d-2139-4721-9051-fd8208c3d0a3.png",
    },
    {
      id: 6,
      name: "Simone Wakwitu",
      points: "49",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/d0c89c63-501a-4236-a329-d218b87e7f93.png",
    },
    {
      id: 7,
      name: "Peter Malenge",
      points: "50",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/024e016a-482f-4d62-8018-3eb9f934ce31.png",
    },
    {
      id: 8,
      name: "Shivani Gupta",
      points: "52",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/18e16ffe-0d6f-434f-9770-ae3950593ab3.png",
    },
    {
      id: 9,
      name: "Henry Koech",
      points: "53",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/844ad2ab-dc96-4604-b150-485f14daaa35.png",
    },
    {
      id: 10,
      name: "Mvita Mwalili",
      points: "50",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/dd8733f1-71d3-4eb6-b109-41d004e911e0.png",
    },
    {
      id: 11,
      name: "Rhoda Nanjala",
      points: "58",
      imageUrl:
        "https://assets.api.uizard.io/api/cdn/stream/f5332dd1-4ad1-41d5-b32e-baa2a044cd66.png",
    },
  ];
  return (
    <View mt="2.5">
      <HStack space="2.5">
        {users.slice(0, 3).map((item) => (
          <Stack
            key={item.id}
            alignContent="center"
            alignItems="center"
            space="2.5"
          >
            <Avatar source={{ uri: item.imageUrl }} size="lg" />
            <Text fontSize="lg" color="gray.500">
              {item.name}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {item.points} pts
            </Text>
          </Stack>
        ))}
      </HStack>
      <View mt="2.5">
        {users.slice(4).map((item, index) => (
          <Box key={item.id}>
            <Divider mb="2.5" mt="2.5" />
            <HStack space="2.5" alignItems="center">
              <Text fontSize="lg" color="gray.500">{` ${index + 4}`}</Text>
              <Avatar source={{ uri: item.imageUrl }} size="lg" />
              <Stack space="1.5">
                <Text fontSize="lg" color="gray.500">
                  {item.name}
                </Text>
                <Text fontSize="lg" color="gray.500">
                  {item.points} pts
                </Text>
              </Stack>
            </HStack>
          </Box>
        ))}
        <Divider mb="2.5" mt="2.5" />
      </View>
    </View>
  );
}
