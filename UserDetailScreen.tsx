import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserDetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.name}</Text>
      <Text style={styles.text}>📧 Email: {user.email}</Text>
      <Text style={styles.text}>📞 Phone: {user.phone}</Text>
      <Text style={styles.text}>
        📍 Address: {user.address.street}, {user.address.city}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 5 },
});

export default UserDetailScreen;
