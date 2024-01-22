// App.js

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import BookingPage from './BookingPage';
import ConfirmationPage from './ConfirmationPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Booking" component={BookingPage} />
        <Stack.Screen name="Confirmation" component={ConfirmationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
