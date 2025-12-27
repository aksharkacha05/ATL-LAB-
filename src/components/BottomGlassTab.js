import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";

export default function BottomGlassTab({ active, onChange }) {
  const tabs = ["Gujarati", "English", "Image"];

  return (
    <BlurView intensity={50} tint="light" style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.button,
            active === tab && styles.active,
          ]}
          onPress={() => onChange(tab)}
        >
          <Text
            style={[
              styles.text,
              active === tab && styles.activeText,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 12,
    left: 16,
    right: 16,
    flexDirection: "row",
    borderRadius: 30,
    padding: 6,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  active: {
    backgroundColor: "rgba(13,71,161,0.25)",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
  },
  activeText: {
    color: "#0D47A1",
    fontWeight: "800",
  },
});
