import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import UpcomingLectureCard from "../components/UpcomingLectureCard";
import TodayScheduleList from "../components/TodayScheduleList";
import BottomGlassTab from "../components/BottomGlassTab";
import TimetableImageScreen from "./TimetableImageScreen";
import { timetable } from "../data/timetable";
import { getUpcomingLecture } from "../utils/timeUtils";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Gujarati");

  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const lectures = timetable[activeTab]?.[today] || [];
  const upcoming = getUpcomingLecture(lectures);

  return (
    <View style={styles.container}>
      {activeTab === "Image" ? (
        <TimetableImageScreen />
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <Header />
          <UpcomingLectureCard lecture={upcoming} />
          <TodayScheduleList lectures={lectures} />
        </ScrollView>
      )}

      <BottomGlassTab active={activeTab} onChange={setActiveTab} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 120, // space for glass tab
  },
});
