import { View, Text, StyleSheet } from "react-native";
import { getUpcomingTimeStatus } from "../utils/timeUtils";

export default function UpcomingLectureCard({ lecture }) {
  if (!lecture) {
    return (
      <View style={styles.emptyCard}>
        <Text style={styles.emptyText}>🎉 No more lectures today</Text>
      </View>
    );
  }

  const timeStatus = getUpcomingTimeStatus(lecture.start);

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>📌 Next Lecture</Text>

      <Text style={styles.time}>
        ⏰ {lecture.start} – {lecture.end}
      </Text>

      <Text style={styles.status}>{timeStatus}</Text>

      <View style={styles.row}>
        <Text style={styles.label}>🏫 Class</Text>
        <Text style={styles.value}>{lecture.class}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>🧱 Floor</Text>
        <Text style={styles.value}>{lecture.floor}</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 18,
    marginBottom: 20,
    elevation: 4,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0D47A1",
  },
  time: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 15,
    color: "#555",
  },
  value: {
    fontSize: 16,
    fontWeight: "600",
  },
  emptyCard: {
    backgroundColor: "#E8F5E9",
    padding: 20,
    borderRadius: 14,
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#2E7D32",
    fontWeight: "600",
  },
  status: {
    fontSize: 14,
    fontWeight: "700",
    color: "#D32F2F",
    marginBottom: 10,
  },
  
});
