import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Btn from "../../components/Btn";

const Profile = ({ navigation, setIsVerified }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile Screen</Text>
            <Btn
                title="Go to History Screen"
                onPress={() => navigation.navigate("History")}
            />
            <Btn title="Logout" onPress={() => setIsVerified(false)} />
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        fontSize: 22,
        color: "#444",
    },
});
