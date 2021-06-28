import React from "react"
import { NavigationContainer} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { 
    Landing,
    Home,
    Search,
    Cart,
    Favourite,
    Profile,
    Details
} from "../screens/index"

import Icon from "react-native-vector-icons/Ionicons"


// home tabs
const HomeTabs = createBottomTabNavigator();
const HomeTabsScreen = () => {
    return <HomeTabs.Navigator
    
    
            tabBarOptions={{
                showLabel: false
            }}
    >

        {/* home screen */}
        <HomeTabs.Screen name="Home" component={Home} options={{
            tabBarIcon: (props) => <Icon name="md-home"  size={props.size} color={props.color}  />
        }} />


         {/* search screen */}
        <HomeTabs.Screen name="Search" component={Search} options={{
            tabBarIcon: (props) => <Icon name="search-outline"  size={props.size} color={props.color}  />
        }} />

        {/* cart screen */}
        <HomeTabs.Screen name="Cart" component={Cart} options={{
            tabBarIcon: (props) => <Icon name="cart-outline"  size={props.size} color={props.color}  />
        }} />

        {/* favourite screen */}
        <HomeTabs.Screen name="Favourite" component={Favourite} options={{
            tabBarIcon: (props) => <Icon name="heart-outline"  size={props.size} color={props.color}  />
        }} />


        {/* profile screen */}
        <HomeTabs.Screen name="Profile" component={Profile} options={{
            tabBarIcon: (props) => <Icon name="person-outline"  size={props.size} color={props.color}  />
        }} />
    </HomeTabs.Navigator>
}


const AppStack = createStackNavigator();

const AppStackScreen = () => {
    return <AppStack.Navigator

                screenOptions={{
                    headerShown: false
                }}
    >
        <AppStack.Screen name="Landing" component={Landing}  />
        <AppStack.Screen name="Home" component={HomeTabsScreen}  />
        <AppStack.Screen name="Details" component={Details}  />
    </AppStack.Navigator>
}

const Routes = () => {

    return <NavigationContainer>
            <AppStackScreen /> 
    </NavigationContainer>
}
export default Routes; 