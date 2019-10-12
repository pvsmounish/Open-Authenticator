import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Screens from '../screens';

const OpenAuthenticatorRoot = createStackNavigator({
    Home: {
        screen: Screens.HomeScreen,
    },
    AddService: {
        screen: Screens.AddServiceScreen,
    },
}, {
    headerMode: 'none',
});

export const OpenAuthenticatorNavigation = createAppContainer(OpenAuthenticatorRoot);