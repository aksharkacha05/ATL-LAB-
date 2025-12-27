import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function LanguageToggle({ selected, onChange }) {
  return (
    <View style={styles.container}>
      {["Gujarati", "English"].map((lang) => (
        <TouchableOpacity
          key={lang}
          style={[
            styles.button,
            selected === lang && styles.active,
          ]}
          onPress={() => onChange(lang)}
        >
          <Text
            style={[
              styles.text,
              selected === lang && styles.activeText,
            ]}
          >
            {lang}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  button: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1976D2",
    alignItems: "center",
  },
  active: {
    backgroundColor: "#1976D2",
  },
  text: {
    color: "#1976D2",
    fontWeight: "bold",
  },
  activeText: {
    color: "#fff",
  },
});
