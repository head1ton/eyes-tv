import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import MoviesScreen from "../screens/Movies";
import TVScreen from "../screens/TV";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config";

const TabNavigation = createBottomTabNavigator(
    {
        Movie: {
            screen: createStack(MoviesScreen, "Movies"),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        },
        TV: {
            screen: createStack(TVScreen, "TV"),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                    />
                )
            }
        },
        Search: {
            screen: createStack(SearchScreen, "Search"),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={
                            Platform.OS === "ios" ? "ios-search" : "md-search"
                        }
                    />
                )
            }
        }
    },
    {
        // initialRouteName: "Search", // 앱 열면 제일 먼저 열리도록...
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);
