import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Btn = (props: any) => {
    return props.disabled ? (
        <TouchableOpacity onPress={props.onPress} disabled>
            <View
                style={{
                    ...styles.Button,
                    ...props.style,
                    backgroundColor: "#aaa",
                }}
            >
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{ ...styles.Button, ...props.style }}>
                <Text style={styles.buttonText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Btn;

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#444",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
});
