import React from "react";
import { View } from "../Themed";
import { Box, Button, HStack, Center, Divider } from "native-base";
import { ImageBackground } from "react-native";

export default function Hero() {
  return (
    <View>
      <Box>
        <ImageBackground
          source={{
            uri: "https://assets.api.uizard.io/api/cdn/stream/601c754e-b8c4-4187-9ffa-a524b0203acf.png",
          }}
          style={{ height: 133 }}
          imageStyle={{ borderRadius: 10 }}
        >
          <Button
            size="sm"
            position="absolute"
            bottom="1.5"
            ml="1.5"
            backgroundColor="#ec1b24"
            pl="5"
            pr="5"
            rounded="lg"
          >
            Book a Tee
          </Button>
        </ImageBackground>
      </Box>
      <HStack space={3} alignItems="center" mt="2.0">
        <Box>
          <ImageBackground
            source={{
              uri: "https://assets.api.uizard.io/api/cdn/stream/b4a86f3d-7212-47f9-b63a-a7a6b40c2279.png",
            }}
            style={{ height: 133, width: 163 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Button
              size="sm"
              position="absolute"
              bottom="1.5"
              ml="1.5"
              pl="5"
              pr="5"
              rounded="lg"
              backgroundColor="#ec1b24"
            >
              Resources
            </Button>
          </ImageBackground>
        </Box>
        <Box>
          <ImageBackground
            source={{
              uri: "https://assets.api.uizard.io/api/cdn/stream/24868cad-fa3e-4a71-ba9b-8d55da8e0019.png",
            }}
            style={{ height: 133, width: 163 }}
            imageStyle={{ borderRadius: 10 }}
          >
            <Button
              size="sm"
              position="absolute"
              bottom="1.5"
              ml="1.5"
              pl="7"
              pr="7"
              rounded="lg"
              backgroundColor="#ec1b24"
            >
              Shop
            </Button>
          </ImageBackground>
        </Box>
      </HStack>
      <Center>
        <Divider
          mt="2.0"
          backgroundColor="#c1c1c1"
          thickness="3.0"
          width={150}
        />
      </Center>
    </View>
  );
}
