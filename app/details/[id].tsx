import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Box,
  Image,
  HStack,
  SimpleGrid,
  Button,
  ScrollView,
  Avatar,
  Center,
  Radio,
} from "native-base";
import { Link, Stack, router, useLocalSearchParams } from "expo-router";
import {
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import { Pressable, TouchableOpacity } from "react-native";

export default function BookingDetails() {
  const params = useLocalSearchParams();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const scrollViewRef = useRef<typeof ScrollView | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  const onDayPress = (day: Date) => {
    setSelectedDate(day);
  };

  const renderDay = (day: Date) => {
    const isSelected =
      selectedDate && selectedDate.toDateString() === day.toDateString();
    const isToday = moment(day).isSame(moment(), "day");
    const dayOfWeek = day.toLocaleString("default", { weekday: "short" });
    const dayOfMonth = day.getDate();
    const month = day.toLocaleString("default", { month: "short" });

    return (
      <TouchableOpacity onPress={() => onDayPress(day)}>
        <View>
          <Text>{month}</Text>

          <Avatar
            size="sm"
            bgColor="white"
            borderColor={isSelected ? "#ec1b24" : "gray.500"}
            shadow="2"
            _text={{ color: isSelected ? "#ec1b24" : "gray.500" }}
            alignItems="center"
            alignContent="center"
            borderWidth={1}
          >
            {dayOfMonth}
          </Avatar>
          <Text>{dayOfWeek}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const getWeeks = (startDate: Date, numWeeks: number) => {
    const weeks = [];
    let currentDate = moment(startDate);

    for (let i = 0; i < numWeeks; i++) {
      const startOfWeek = currentDate.clone().startOf("week");
      const endOfWeek = currentDate.clone().endOf("week");
      const days = [];

      for (
        let day = startOfWeek;
        day.isSameOrBefore(endOfWeek);
        day.add(1, "day")
      ) {
        days.push(day.toDate());
      }

      weeks.push(days);
      currentDate.add(1, "week");
    }

    return weeks;
  };

  const weeks = getWeeks(selectedDate || new Date(), 4);
  const [showLeftChevron, setShowLeftChevron] = useState(false);
  const [showRightChevron, setShowRightChevron] = useState(true);

  const timeArray = [
    { id: 1, time: "9:00am" },
    { id: 2, time: "10:00am" },
    { id: 3, time: "11:00am" },
    { id: 4, time: "12:00pm" },
    { id: 5, time: "13:00pm" },
    { id: 6, time: "14:00pm" },
    { id: 7, time: "15:00pm" },
    { id: 8, time: "16:00pm" },
  ];
  const holes = [
    { id: 1, number: "9" },
    { id: 2, number: "18" },
  ];
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Stack.Screen
          options={{
            headerLeft: () => (
              <Pressable onPress={() => router.back()}>
                {({ pressed }) => (
                  <Avatar
                    style={{ opacity: pressed ? 0.5 : 1 }}
                    backgroundColor="#ec1b24"
                  >
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                  </Avatar>
                )}
              </Pressable>
            ),

            headerShadowVisible: false,
            headerTransparent: false,
            headerTitle: "",

            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <Avatar
                      source={{
                        uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                      }}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <View padding={15}>
          <Text>{params.id}</Text>
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
            <HStack space="2.5" pt="3" pb="3">
              <MaterialIcons name="calendar-month" size={24} color="black" />
              <Text color="gray.500" fontSize="lg">
                {" "}
                Select Date
              </Text>
            </HStack>
            <View>
              <View>
                <View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Text>
                        {moment(selectedDate || new Date()).format("MMMM YYYY")}
                      </Text>
                    </View>
                    <HStack space={2} alignItems="center">
                      <ScrollView
                        ref={scrollViewRef}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexDirection: "row" }}
                      >
                        {weeks.map((week, index) => (
                          <HStack key={index} space={5}>
                            {week.map((day, index) => (
                              <View key={index}>{renderDay(day)}</View>
                            ))}
                          </HStack>
                        ))}
                      </ScrollView>
                    </HStack>
                  </View>
                </View>
              </View>
            </View>
            <HStack space="2.5" pt="3" pb="3">
              <MaterialIcons
                name="access-time-filled"
                size={24}
                color="black"
              />
              <Text color="gray.500" fontSize="lg">
                {" "}
                Select Time
              </Text>
            </HStack>
            <Box>
              <SimpleGrid columns={4} space={4}>
                {timeArray.map((item) => (
                  <Button
                    onPress={() => setSelectedTime(item.time)}
                    _text={{
                      color:
                        selectedTime === item.time ? "#ec1b24" : "gray.500",
                    }}
                    key={item.id}
                    variant="outline"
                    rounded="3xl"
                    size="sm"
                    borderColor={
                      selectedTime === item.time ? "#ec1b24" : "gray.500"
                    }
                  >
                    {item.time}
                  </Button>
                ))}
              </SimpleGrid>
            </Box>
          </View>
          <View pt="3">
            <HStack space="2.5" alignItems="center">
              <MaterialCommunityIcons name="golf" size={24} color="black" />
              <Text fontSize="lg" color="gray.500">
                Select Holes
              </Text>
            </HStack>
            <Center>
              <HStack space="3" mt="3">
                {holes.map((item) => (
                  <Button
                    onPress={() => setSelectedTime(item.number)}
                    _text={{
                      color:
                        selectedTime === item.number ? "#ec1b24" : "gray.500",
                    }}
                    key={item.id}
                    variant="outline"
                    rounded="3xl"
                    size="sm"
                    borderColor={
                      selectedTime === item.number ? "#ec1b24" : "gray.500"
                    }
                    alignItems="center"
                  >
                    <Text
                      color={
                        selectedTime === item.number ? "#ec1b24" : "gray.500"
                      }
                    >
                      {item.number} holes
                    </Text>
                  </Button>
                ))}
              </HStack>
            </Center>
            <View pt="8">
              <HStack space="2.5" alignItems="center">
                <MaterialCommunityIcons
                  name="golf-cart"
                  size={24}
                  color="black"
                />
                <View>
                  <Text fontSize="lg" color="gray.500">
                    Need a kit?
                  </Text>
                </View>
              </HStack>
              <View ml="8" pt="3">
                <Radio.Group name="kit" display="table-row" colorScheme="red">
                  <HStack space="3">
                    <Radio value="1">Yes</Radio>
                    <Radio value="2">No</Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </View>
            <View pt="8">
              <HStack space="2.5" alignItems="center">
                <FontAwesome6 name="user-group" size={24} color="black" />
                <View>
                  <Text fontSize="lg" color="gray.500">
                    Join Exhisting Game?
                  </Text>
                </View>
              </HStack>
              <View ml="8" pt="3">
                <Radio.Group name="kit" display="table-row" colorScheme="red">
                  <HStack space="3">
                    <Radio value="1">Yes</Radio>
                    <Radio value="2">No</Radio>
                  </HStack>
                </Radio.Group>
              </View>
            </View>
            <Center pt="8">
              <Button
                onPress={() => router.push("/payment/Payment")}
                bgColor="#ec1b24"
                rounded="full"
                pl="10"
                pr="10"
              >
                Next
              </Button>
            </Center>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
