import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/Home";
import ProfileScreen from "../screens/Profile/Profile";
import HistoryScreen from "../screens/Profile/History";
import AuthScreen from "../screens/Auth/Auth";
import { TouchableOpacity } from "react-native-gesture-handler";

const AuthStack = createStackNavigator();

const AuthNavigator: any = ({ setIsVerified }: any) => (
    <AuthStack.Navigator initialRouteName="Login">
        <AuthStack.Screen name="Auth">
            {(props) => <AuthScreen {...props} setIsVerified={setIsVerified} />}
        </AuthStack.Screen>
    </AuthStack.Navigator>
);

const HomeStack = createStackNavigator();

const HomeNavigator: any = () => (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <HomeStack.Screen component={HomeScreen} name="Home" />
    </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileNavigator: any = ({ setIsVerified }: any) => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="Profile"
            options={({ navigation }) => ({
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Ionicons
                            color="black"
                            name="menu"
                            size={25}
                            style={{ marginLeft: 15 }}
                        />
                    </TouchableOpacity>
                ),
                headerTitle: "Profile (custom header bar)",
            })}
        >
            {(props) => (
                <ProfileScreen {...props} setIsVerified={setIsVerified} />
            )}
        </ProfileStack.Screen>
        <ProfileStack.Screen component={HistoryScreen} name="History" />
    </ProfileStack.Navigator>
);

const MainDrawer = createDrawerNavigator();

const MainDrawerNavigator: any = ({ setIsVerified }: any) => {
    return (
        <MainDrawer.Navigator initialRouteName="HomeStack">
            <MainDrawer.Screen
                component={HomeNavigator}
                name="HomeStack"
                options={{
                    drawerLabel: "Home",
                    headerTitle: "Home",
                }}
            />
            <MainDrawer.Screen
                name="ProfileStack"
                options={{
                    headerShown: false,
                    drawerLabel: "Profile and History",
                }}
            >
                {(props) => (
                    <ProfileNavigator
                        {...props}
                        setIsVerified={setIsVerified}
                    />
                )}
            </MainDrawer.Screen>
        </MainDrawer.Navigator>
    );
};

const AppStack = createStackNavigator();

// Auth Navigation without Redux with useState:
function AppNavigator() {
    const [isVerified, setIsVerified] = useState(false);
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="AppStack">
                    {(props) =>
                        isVerified ? (
                            <MainDrawerNavigator
                                {...props}
                                setIsVerified={setIsVerified}
                            />
                        ) : (
                            <AuthNavigator
                                {...props}
                                setIsVerified={setIsVerified}
                            />
                        )
                    }
                </AppStack.Screen>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
