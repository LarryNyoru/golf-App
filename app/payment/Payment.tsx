import React from "react";
import {
  View,
  Text,
  HStack,
  Box,
  Image,
  Center,
  Divider,
  VStack,
  Button,
  ScrollView,
} from "native-base";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";

export default function Payment() {
  return (
    <ScrollView>
      <View
        paddingLeft={15}
        paddingRight={15}
        paddingTop={5}
        paddingBottom={5}
        flex={1}
      >
        <Box>
          <Image
            width="100%"
            height={183}
            source={{
              uri: "https://assets.api.uizard.io/api/cdn/stream/82bde484-a1ba-4110-b160-34deb5dcb1e7.png",
            }}
            alt="IMG"
            rounded="xl"
          />
        </Box>
        <View pt="3">
          <Text color="coolGray.700" fontSize="lg">
            Windsor Golf Hotel and Country Club
          </Text>
          <HStack space="2.5">
            <MaterialIcons name="location-on" size={18} color="gray" />
            <Text color="gray.500"> Eastern Bypass off Kiambu Road</Text>
          </HStack>
        </View>
        <Center pt="3">
          <Divider
            mt="2.0"
            backgroundColor="#c1c1c1"
            thickness="3.0"
            width={150}
          />
          <Text fontSize="lg" color="gray.500">
            Booking Ref : BT110
          </Text>
        </Center>
        <VStack space={4}>
          <HStack space="6">
            <MaterialIcons name="calendar-month" size={24} color="black" />
            <Text color="gray.500" fontSize="lg">
              Thu 12th September 2023
            </Text>
          </HStack>
          <HStack space="6">
            <MaterialIcons name="access-time-filled" size={24} color="black" />
            <Text color="gray.500" fontSize="lg">
              2:00pm
            </Text>
          </HStack>
          <HStack space="6">
            <MaterialIcons name="golf-course" size={24} color="black" />
            <Text color="gray.500" fontSize="lg">
              9 holes
            </Text>
          </HStack>
          <HStack space="6">
            <MaterialCommunityIcons name="golf-cart" size={24} color="black" />
            <Text color="gray.500" fontSize="lg">
              Leasing Kit{" "}
            </Text>
          </HStack>

          <HStack space="6">
            <FontAwesome5 name="user-friends" size={24} color="black" />
            <Text color="gray.500" fontSize="lg">
              Join Group{" "}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <HStack space="6">
              <FontAwesome6
                name="hand-holding-dollar"
                size={24}
                color="black"
              />
              <Text color="gray.500" fontSize="lg">
                Pay:{" "}
              </Text>
            </HStack>
            <Text fontSize="2xl" color="gray.500">
              Ksh 4,500
            </Text>
          </HStack>
        </VStack>
        <Center>
          <Divider
            mt="2.0"
            backgroundColor="#c1c1c1"
            thickness="3.0"
            width={250}
          />
          <HStack space="4">
            <Box width={70} height={70}>
              <Image
                alt="IMG"
                source={{
                  uri: "https://assets.api.uizard.io/api/cdn/stream/37d6b90a-6b40-4d5e-b2cb-d6961083eac3.png",
                }}
                width={70}
                height={70}
                resizeMode="contain"
              />
            </Box>
            <Box width={70} height={70}>
              <Image
                alt="IMG"
                source={{
                  uri: "https://assets.api.uizard.io/api/cdn/stream/0129677a-0127-42f4-b855-33d09336d44d.png",
                }}
                resizeMode="contain"
                width={70}
                height={70}
              />
            </Box>
            <Box width={70} height={70}>
              <Image
                alt="IMG"
                source={{
                  uri: "https://assets.api.uizard.io/api/cdn/stream/d6533ab0-dbaa-4a3f-b9ab-faf03c70b5c4.png",
                }}
                resizeMode="contain"
                width={70}
                height={70}
              />
            </Box>
          </HStack>
          <Button
            //   onPress={() => router.push("/payment/Payment")}
            bgColor="#ec1b24"
            rounded="full"
            pl="10"
            pr="10"
          >
            Pay Now
          </Button>
        </Center>
      </View>
    </ScrollView>
  );
}
