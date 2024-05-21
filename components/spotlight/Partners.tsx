import React from "react";
import {
  AspectRatio,
  Box,
  HStack,
  View,
  Image,
  Text,
  Divider,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
export default function Partners() {
  const patners = [
    {
      id: 1,
      company: "Sinta's Flower Shop",
      logo: "https://assets.api.uizard.io/api/cdn/stream/cc49052f-8077-4f27-873b-36f50f18f915.png",
    },
    {
      id: 2,
      company: "Miradi Skin Care",
      logo: "https://assets.api.uizard.io/api/cdn/stream/e0c4087a-e344-4997-974e-d8fda0f95f97.png",
    },
    {
      id: 3,
      company: "Elijah Bonyo",
      logo: "https://assets.api.uizard.io/api/cdn/stream/24bec232-9ebc-40aa-9b61-e4b4e97855fc.png",
    },
    {
      id: 4,
      company: "ALtenate Limited",
      logo: "https://assets.api.uizard.io/api/cdn/stream/a9c73902-c85c-48cc-b9a8-9626e82289b2.png",
    },
    {
      id: 5,
      company: "Graeglamour Interor",
      logo: "https://assets.api.uizard.io/api/cdn/stream/dbf55906-d9b4-436e-b041-707d15aa3dc2.png",
    },
  ];
  return (
    <View pt="2.5">
      {patners.map((item) => (
        <Box>
          <Divider mt="2.5" mb="2.5" />
          <HStack
            space="2.5"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box width={113} height={93}>
              <Image
                source={{ uri: item.logo }}
                alt="IMG"
                style={{ flex: 1 }}
                resizeMode="center"
                rounded="lg"
              />
            </Box>

            <Text fontSize="lg" color="gray.500">
              {" "}
              {item.company}
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="black" />
          </HStack>
        </Box>
      ))}
    </View>
  );
}
