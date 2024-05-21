import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { HStack, View, Text, Icon, Input } from "native-base";
import { Link } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

export default function BoookingsHero() {
  return (
    <View mt="1.5">
      <HStack justifyContent="space-between">
        <Text fontSize="xl" color="gray.500">
          Find a Club
        </Text>

        <Link href="/bookings/Bookings" asChild>
          <Pressable>
            <HStack alignItems="center" space="1.5">
              <Text fontSize="xl" color="#ec1b24">
                {" "}
                Bookings
              </Text>
              <MaterialIcons name="chevron-right" color="#ec1b24" size={28} />
            </HStack>
          </Pressable>
        </Link>
      </HStack>
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
      </View>
    </View>
  );
}
