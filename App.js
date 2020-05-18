import React from 'react'

import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"

import PatientScreen from './screens/PatientScreen'
import HomeScreen from './screens/HomeScreen'


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    Patient: {
        screen: PatientScreen
    },
    initialRouteName: 'Home'
});


export default createAppContainer(AppNavigator)
