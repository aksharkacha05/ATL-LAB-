import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export async function requestNotificationPermission() {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === "granted";
}

export async function scheduleAllLectures(lectures) {
  await Notifications.cancelAllScheduledNotificationsAsync();

  for (const lecture of lectures) {
    const [hour, minute] = lecture.start.split(":").map(Number);

    const trigger = new Date();
    trigger.setHours(hour);
    trigger.setMinutes(minute - 10);
    trigger.setSeconds(0);

    if (trigger > new Date()) {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "ATL Lecture Reminder",
          body: `Class ${lecture.class} at ${lecture.start} (${lecture.floor})`,
        },
        trigger,
      });
    }
  }
}
