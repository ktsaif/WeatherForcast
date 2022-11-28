
import React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Page1 from '../pages/page1/Page1.page';
const Stack = createNativeStackNavigator();
const navigationRef = useNavigationContainerRef(); 

export const RootNavigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Page1'>
                <Stack.Screen name='Weather Forecasting' component={Page1}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export function navigate(name:string, params?:object) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
}