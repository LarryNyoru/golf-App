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
} from "native-base";
import { TouchableOpacity } from "react-native";
import Leaderboards from "./Leaderboards";
import Partners from "./Partners";

export default function SpotlightHome() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
  };

  const displayContent = () => {
    switch (activeTabIndex) {
      case 0:
        return (
          <View>
            <Leaderboards />
          </View>
        );
      case 1:
        return (
          <View>
            <Partners />
          </View>
        );

      default:
        return null;
    }
  };
  return (
    <View>
      <Center>
        <HStack space="3.5">
          <Pressable onPress={() => handleTabChange(0)}>
            {({ isPressed }) => (
              <Box>
                <Text
                  color={activeTabIndex === 0 ? "red.500" : "gray.500"}
                  fontWeight={activeTabIndex === 0 ? "bold" : "normal"}
                >
                  Leaderboards
                </Text>
                {activeTabIndex === 0 && (
                  <Divider bg="red.500" thickness="2" w="100%" mt="1" mb="1" />
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
                >
                  Partners
                </Text>
                {activeTabIndex === 1 && (
                  <Divider bg="red.500" thickness="2" w="100%" mt="1" mb="1" />
                )}
              </Box>
            )}
          </Pressable>
        </HStack>
      </Center>

      {displayContent()}
    </View>
  );
}
