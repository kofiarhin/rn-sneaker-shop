import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {colors} from '../constants/colors';

import {
  Landing,
  Home,
  Search,
  Cart,
  Favourite,
  Profile,
  Details,
  Items,
} from '../screens/index';

import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// context
import {CartContextProvider} from '../context/CartContext';
import {DataContextProvider} from '../context/DataContext';
import {FavouriteContextProvider} from '../context/FavouriteContext';
import {AuthContextProvider} from '../context/AuthContext';
import {OrdersContextProvider} from '../context/Orders.context';

// MainTabs
const MainTabs = createBottomTabNavigator();
const MainTabsScreen = () => {
  return (
    <MainTabs.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
      }}>
      {/* home screen */}
      <MainTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: props => (
            <Icon name="md-home" size={props.size} color={props.color} />
          ),
        }}
      />

      {/* search screen */}
      <MainTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: props => (
            <Icon name="search-outline" size={props.size} color={props.color} />
          ),
        }}
      />

      {/* favourite screen */}
      <MainTabs.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: props => (
            <Icon name="heart-outline" size={props.size} color={props.color} />
          ),
        }}
      />

      {/* cart screen */}
      <MainTabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: props => (
            <Icon name="cart-outline" size={props.size} color={props.color} />
          ),
        }}
      />

      {/* profile screen */}
      <MainTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: props => (
            <Icon name="person-outline" size={props.size} color={props.color} />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
};

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Landing" component={Landing} />
      <AppStack.Screen name="MainTabs" component={MainTabsScreen} />
      <AppStack.Screen name="Items" component={Items} />
      <AppStack.Screen name="Details" component={Details} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <AuthContextProvider>
      <DataContextProvider>
        <OrdersContextProvider>
          <CartContextProvider>
            <FavouriteContextProvider>
              <NavigationContainer>
                <AppStackScreen />
              </NavigationContainer>
            </FavouriteContextProvider>
          </CartContextProvider>
        </OrdersContextProvider>
      </DataContextProvider>
    </AuthContextProvider>
  );
};
export default Routes;
