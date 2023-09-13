import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default Routes;
