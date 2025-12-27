import { View, Image, StyleSheet, ScrollView, Text } from "react-native";

export default function TimetableImageScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Official Timetable (Reference)</Text>

      <Image
        source={require("../../assets/timetable.jpeg")}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF2F7",
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
    color: "#0D47A1",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 500, // large so user can zoom/scroll
    borderRadius: 12,
    backgroundColor: "#FFF",
  },
});
