import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Screens from '../screens';

const OpenAuthenticatorRoot = createStackNavigator({
    Root: {
        screen: Screens.HomeScreen,
    },
}, {
    headerMode: 'none',
});

export const OpenAuthenticatorNavigation = createAppContainer(OpenAuthenticatorRoot);