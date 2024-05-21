import React from "react";
import {
  View,
  Text,
  Box,
  Avatar,
  Flex,
  HStack,
  VStack,
  Stack,
} from "native-base";
import { ImageBackground } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
export default function NetworkingEvents() {
  return (
    <View mt="2.5">
      <Text fontSize="xl" color="gray.500">
        Find events
      </Text>
      <View>
        <Box borderWidth={1} height={270} rounded="lg">
          <Stack>
            <Box height={120}>
              <ImageBackground
                source={{
                  uri: "https://assets.api.uizard.io/api/cdn/stream/b550c87a-be06-4e54-bd45-b91b6ba14eab.png",
                }}
                imageStyle={{ height: 120 }}
              >
                <Flex align="flex-end">
                  <Avatar bg="white" m="2.0">
                    <FontAwesome name="heart-o" size={24} color="#ec1b24" />
                  </Avatar>
                </Flex>
              </ImageBackground>
            </Box>
            <Box>
              <View>
                <HStack justifyContent="space-between" p="2.5">
                  <VStack>
                    <Text fontSize="xl" color="gray.500">
                      {" "}
                      The Meet & Greet
                    </Text>
                    <HStack>
                      <MaterialIcons
                        name="location-on"
                        size={24}
                        color="gray"
                      />
                      <Text>Windsor Golf Hotel and Country club</Text>
                    </HStack>
                  </VStack>
                  <VStack>
                    <VStack space="0">
                      <Text fontSize="xl">16</Text>
                      <Text fontSize="xl">Sep</Text>
                    </VStack>
                  </VStack>
                </HStack>
                <HStack
                  justifyContent="space-between"
                  m="2.5"
                  alignContent="center"
                  alignItems="center"
                >
                  <View pl="3.5">
                    <Avatar.Group
                      _avatar={{
                        size: "md",
                        bg: "#ec1b24",
                        backgroundColor: "#ec1b24",
                      }}
                      max={3}
                    >
                      <Avatar
                        bg="green.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      >
                        AJ
                      </Avatar>
                      <Avatar
                        bg="cyan.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                      >
                        TE
                      </Avatar>
                      <Avatar
                        bg="indigo.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      >
                        JB
                      </Avatar>
                      <Avatar
                        bg="amber.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                      >
                        TS
                      </Avatar>
                      <Avatar
                        bg="green.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      >
                        AJ
                      </Avatar>
                      <Avatar
                        bg="cyan.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                        }}
                      >
                        TE
                      </Avatar>
                      <Avatar
                        bg="indigo.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      >
                        JB
                      </Avatar>
                    </Avatar.Group>
                  </View>
                  <View>
                    <HStack
                      alignContent="center"
                      alignItems="center"
                      space="1.5"
                    >
                      <Avatar bg="#ec1b24" size="sm">
                        <FontAwesome name="dollar" size={24} color="white" />
                      </Avatar>
                      <Text fontSize="xl" color="gray.500">
                        Ksh 2,000
                      </Text>
                    </HStack>
                  </View>
                </HStack>
              </View>
            </Box>
          </Stack>
        </Box>
      </View>
    </View>
  );
}
