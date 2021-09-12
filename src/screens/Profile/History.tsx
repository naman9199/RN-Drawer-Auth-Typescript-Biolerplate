import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Btn from "../../components/Btn";

const History = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>HISTORY Screen</Text>
            <Btn
                title="Go to Profile Screen"
                onPress={() => navigation.navigate("Profile")}
            />
        </View>
    );
};

export default History;

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
