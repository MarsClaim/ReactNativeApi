import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Ionicons from "react-native-vector-icons/Ionicons"
import CharactersScreen from "../screens/CharactersScreen";

const Tab= createBottomTabNavigator();

export default function NavigationTab(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon : ({focused, color, size}) => { 
                    let iconName;
                    if (route.name=='Home'){
                        iconName = focused ? 'home' : 'home-outline';
                    }else if(route.name == 'Settings'){
                        iconName = focused ? 'options' : 'options-outline';
                    }else if(route.name == 'People'){
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor: '#1C21FD',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="People" component={CharactersScreen}/>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}