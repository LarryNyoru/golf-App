import React from "react";
import { View, Input, Icon, Button, Box } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { ImageBackground } from "react-native";
import { router } from "expo-router";

export default function MyShop() {
  return (
    <View mt="2.5">
      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        borderRadius="10"
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
      <Box mt="2.5">
        <ImageBackground
          source={{
            uri: "https://assets.api.uizard.io/api/cdn/stream/24868cad-fa3e-4a71-ba9b-8d55da8e0019.png",
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
            rounded="3xl"
            onPress={() => router.push("/catalog/ViewCatalog")}
          >
            view Catalog
          </Button>
        </ImageBackground>
      </Box>
    </View>
  );
}
