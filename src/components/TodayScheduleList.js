import { View, Text, StyleSheet } from "react-native";

export default function TodayScheduleList({ lectures }) {
  return (
    <View>
      <Text style={styles.heading}>📅 Today’s Lectures</Text>

      {lectures.map((lec, index) => (
  <View key={index} style={styles.item}>
    <View style={styles.timeBox}>
      <Text style={styles.start}>{lec.start}</Text>
      <Text style={styles.end}>{lec.end}</Text>
    </View>

    <View style={styles.details}>
      <Text style={styles.class}>Class {lec.class}</Text>
      <Text style={styles.floor}>{lec.floor}</Text>

      {lec.backToBack && (
        <Text style={styles.badge}>🔁 Back-to-Back</Text>
      )}
    </View>
  </View>
))}

    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0D47A1",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
  },
  timeBox: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: "#EEE",
    marginRight: 12,
  },
  start: {
    fontSize: 14,
    fontWeight: "700",
  },
  end: {
    fontSize: 12,
    color: "#777",
  },
  details: {
    justifyContent: "center",
  },
  class: {
    fontSize: 16,
    fontWeight: "600",
  },
  floor: {
    fontSize: 14,
    color: "#1976D2",
    marginTop: 2,
  },
  badge: {
    marginTop: 4,
    fontSize: 12,
    color: "#D32F2F",
    fontWeight: "700",
  },
  
});
