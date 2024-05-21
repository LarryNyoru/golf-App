import { StyleSheet } from "react-native";

import { ScrollView } from "native-base";
import Hero from "@/components/hero/Hero";
import MyEvents from "@/components/myEvents/MyEvents";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Hero />
      <MyEvents />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
