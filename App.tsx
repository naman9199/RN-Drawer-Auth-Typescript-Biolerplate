import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppNavigator from "./src/navigations/AppNavigator";

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="white" />
            <AppNavigator />
        </>
    );
}
