import React, { useState } from "react";
import {
  Box,
  HStack,
  Pressable,
  Center,
  View,
  Text,
  Badge,
  Divider,
  Avatar,
  VStack,
  Stack,
  Image,
  ScrollView,
  Button,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";

export default function Bookings() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const bookings = [
    {
      venue: {
        company: "Windsor Golf Hotel and Country Club",
        logo: "https://assets.api.uizard.io/api/cdn/stream/82bde484-a1ba-4110-b160-34deb5dcb1e7.png",
      },
      bookingRef: "BT110",
      bookedDate: "Thu 12th Sept 2023 , 2:00pm",
      location: "Eastern Bypass off Kiambu Road",
      holes: "9 holes",
      bookingConfirmed: "Booking Confirmed ",
      players: [
        {
          image:
            "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",

          image2:
            "https://assets.api.uizard.io/api/cdn/stream/d0c89c63-501a-4236-a329-d218b87e7f93.png",
        },
      ],
      slots: "2/4",
    },
    {
      venue: {
        company: "Windsor Golf Hotel and Country Club",
        logo: "https://assets.api.uizard.io/api/cdn/stream/82bde484-a1ba-4110-b160-34deb5dcb1e7.png",
      },
      bookingRef: "BT110",
      bookedDate: "Thu 12th Sept 2023 , 2:00pm",
      location: "Eastern Bypass off Kiambu Road",
      holes: "9 holes",
      bookingConfirmed: "Booking Confirmed ",
      players: [
        {
          image:
            "https://assets.api.uizard.io/api/cdn/stream/c8e4dc2b-eccb-4557-a8a6-5a745d4a77f0.png",
        },
      ],
      slots: "2/4",
    },
  ];

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const displayContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <View>
            {bookings.map((item) => (
              <View>
                <Box bg="#ffe9ec" rounded="xl" mt="4">
                  <View p="3">
                    <HStack space="2.5">
                      <Box h={68} width={68}>
                        <Image
                          source={{ uri: item.venue.logo }}
                          height="100%"
                          width="100%"
                          rounded="lg"
                          alt="IMG"
                        />
                      </Box>
                      <VStack>
                        <Text color="gray.500">{item.venue.company}</Text>
                        <Text color="gray.500">{item.bookingRef}</Text>
                      </VStack>
                    </HStack>
                    <Stack mt="4" space={4}>
                      <HStack space="2.5">
                        <MaterialIcons
                          name="calendar-month"
                          size={24}
                          color="black"
                        />
                        <Text color="gray.500">{item.bookedDate}</Text>
                      </HStack>
                      <HStack space="2.5">
                        <MaterialIcons
                          name="location-on"
                          size={24}
                          color="black"
                        />
                        <Text color="gray.500">{item.location}</Text>
                      </HStack>
                      <HStack space="2.5">
                        <HStack space="2.5">
                          <MaterialIcons
                            name="golf-course"
                            size={24}
                            color="black"
                          />
                          <Text color="gray.500">{item.holes}</Text>
                        </HStack>
                      </HStack>
                      <HStack space="2.5">
                        <MaterialIcons
                          name="check-circle"
                          size={24}
                          color="black"
                        />
                        <Text color="gray.500">{item.bookingConfirmed}</Text>
                      </HStack>
                      <HStack
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        {item.players.map((player) => (
                          <Avatar source={{ uri: player.image }} />
                        ))}
                        <Text color="gray.500" fontSize="lg">
                          Slots : {item.slots}
                        </Text>
                        <Button
                          leftIcon={
                            <MaterialIcons
                              name="share"
                              size={24}
                              color="white"
                            />
                          }
                          bgColor="#ec1b24"
                          rounded="3xl"
                          alignItems="center"
                          _text={{
                            color: "white",
                            alignContent: "center",
                            alignItems: "center",
                          }}
                          size="sm"
                        >
                          invite
                        </Button>
                      </HStack>
                    </Stack>
                  </View>
                </Box>
                <Center>
                  <Divider thickness="3.0" mt="3" mb="3" width={200} />
                </Center>
              </View>
            ))}
          </View>
        );
      case 1:
        return (
          <View>
            <Text>Previous</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Favourites</Text>
          </View>
        );

      default:
        return null;
    }
  };
  return (
    <ScrollView>
      <View paddingLeft={15} paddingRight={15}>
        <Center>
          <Text fontSize="xl" color="gray.500">
            My Bookings
          </Text>
          <HStack space="4" mt="2.5">
            <Pressable onPress={() => handleTabChange(0)}>
              {({ isPressed }) => (
                <Box>
                  <Text
                    color={activeTabIndex === 0 ? "red.500" : "gray.500"}
                    fontWeight={activeTabIndex === 0 ? "bold" : "normal"}
                    fontSize="lg"
                  >
                    Upcoming
                  </Text>
                  {activeTabIndex === 0 && (
                    <Divider
                      bg="red.500"
                      thickness="2"
                      w="100%"
                      mt="1"
                      mb="1"
                    />
                  )}
                </Box>
              )}
            </Pressable>
            <Pressable onPress={() => handleTabChange(1)}>
              {({ isPressed }) => (
                <Box>
                  <Text
                    color={activeTabIndex === 1 ? "red.500" : "gray.500"}
                    fontWeight={activeTabIndex === 1 ? "bold" : "normal"}
                    fontSize="lg"
                  >
                    Previous
                  </Text>
                  {activeTabIndex === 1 && (
                    <Divider
                      bg="red.500"
                      thickness="2"
                      w="100%"
                      mt="1"
                      mb="1"
                    />
                  )}
                </Box>
              )}
            </Pressable>
            <Pressable onPress={() => handleTabChange(2)}>
              {({ isPressed }) => (
                <Box>
                  <Text
                    color={activeTabIndex === 2 ? "red.500" : "gray.500"}
                    fontWeight={activeTabIndex === 1 ? "bold" : "normal"}
                    fontSize="lg"
                  >
                    Favourites
                  </Text>
                  {activeTabIndex === 2 && (
                    <Divider
                      bg="red.500"
                      thickness="2"
                      w="100%"
                      mt="1"
                      mb="1"
                    />
                  )}
                </Box>
              )}
            </Pressable>
          </HStack>
        </Center>

        {displayContent()}
      </View>
    </ScrollView>
  );
}
