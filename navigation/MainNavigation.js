import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Details";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                headerShown: false,
                headerBackTitleVisible: false
            }
        },
        Detail: {
            screen: DetailScreen,
            navigationOptions: {
                ...headerStyles,
                headerBackTitleVisible: false
            }
        }
    },
    {
        headerMode: "screen"
    }
);

export default createAppContainer(MainNavigation);
