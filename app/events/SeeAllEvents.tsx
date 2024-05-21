import React from "react";
import {
  View,
  Text,
  ScrollView,
  HStack,
  Icon,
  Input,
  Pressable,
  Divider,
  Box,
  Image,
  VStack,
  Center,
  Avatar,
} from "native-base";
import { Link, Stack } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

export default function SeeAllEvents() {
  const events = [
    {
      id: 1,
      venue: "Windsor Golf Club",
      name: "The Meet & Greet",
      amount: 200,
      image:
        "https://assets.api.uizard.io/api/cdn/stream/b550c87a-be06-4e54-bd45-b91b6ba14eab.png",
      date: "16 Sep",
    },
    {
      id: 2,
      venue: "Royal Golf Club",
      name: "Entrepreneurs Open",
      amount: "2000-3000",
      image:
        "https://assets.api.uizard.io/api/cdn/stream/1c6ef306-7714-4036-905d-78642608b381.png",
      date: "24 Sep",
    },
    {
      id: 3,
      venue: "Vipingo Ridge Golf Club",
      name: "Entrepreneurs Open",
      amount: 5000,
      image:
        "https://assets.api.uizard.io/api/cdn/stream/1e5f54b7-35bd-415b-840c-2359925c2644.png",
      date: "21 Oct",
    },
  ];
  const users = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <ScrollView>
      {/* <Stack.Screen name="/(tabs)" options={{ headerShown: false }} /> */}
      <View paddingLeft={15} paddingRight={15} paddingBottom={5} paddingTop={5}>
        <HStack justifyContent="space-between">
          <Text fontSize="xl" color="gray.500">
            Find events
          </Text>

          <Link href="/events/SeeAllEvents" asChild>
            <Pressable>
              <HStack alignItems="center" space="1.5">
                <Text fontSize="xl" color="#ec1b24">
                  {" "}
                  See all
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
        <View mt="3">
          {events.map((item) => (
            <View mt="3" key={item.id}>
              <Divider color="gray.500" mb="2.5" />
              <Box>
                <HStack justifyContent="space-between">
                  <Box rounded="lg" borderRadius="lg" backgroundColor="white">
                    <VStack space={3} mb="4">
                      <Image
                        source={{ uri: item.image }}
                        alt="IMG"
                        height={60}
                        width={100}
                        roundedTop="lg"
                      />

                      <Center>
                        <HStack>
                          <MaterialIcons
                            name="calendar-month"
                            size={24}
                            color="#ec1b24"
                          />
                          <Text fontSize="lg" color="gray.500">
                            {" "}
                            {item.date}
                          </Text>
                        </HStack>
                      </Center>
                    </VStack>
                  </Box>
                  <VStack space={3}>
                    <Text fontSize="lg" color="gray.500">
                      {item.name}
                    </Text>

                    <HStack space="2.5">
                      <MaterialIcons
                        name="location-on"
                        size={18}
                        color="gray"
                      />
                      <Text color="gray.500">{item.venue}</Text>
                    </HStack>
                    <HStack space="2.5">
                      <FontAwesome5 name="coins" size={18} color="gray" />
                      <Text color="gray.500">{item.amount}</Text>
                    </HStack>
                    <Box>
                      <Avatar.Group
                        _avatar={{
                          size: "sm",
                          bg: "#ec1b24",
                          backgroundColor: "#ec1b24",
                        }}
                        max={3}
                      >
                        {users.map((user) => (
                          <Avatar key={user.id} source={{ uri: user.image }} />
                        ))}
                      </Avatar.Group>
                    </Box>
                  </VStack>
                  <VStack space={3}>
                    <Avatar size="sm" bg="white">
                      <AntDesign name="hearto" size={22} color="#ec1b24" />
                    </Avatar>
                    <Avatar size="sm" bg="white">
                      <Entypo name="share" size={22} color="#ec1b24" />
                    </Avatar>
                  </VStack>
                </HStack>
              </Box>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
