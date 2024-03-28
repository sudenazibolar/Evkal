import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, TouchableHighlight, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Home from './screens/home';
import Category from './screens/category';
import Profile from './screens/profile';
import MyCart from './screens/mycart';
import Payment from './screens/payment';
import MyOrder from './screens/myorder';
import ConfirmPayment from './screens/confirmpayment';
import CustomTabBar from './components/tabbar';
import Checkout from './screens/checkout';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    <Stack.Screen name="Confirm Payment" component={ConfirmPayment} options={{ headerShown: false }} />
    <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
    <Stack.Screen name="Payment" component={Payment} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    < Tab.Screen name="Category" component={Category} />
    <Tab.Screen name="My Cart" component={MyCart} />
    < Tab.Screen name="My Order" component={MyOrder} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator >
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;