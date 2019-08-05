import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Detail, Home } from './screen'
import {Platform} from 'react-native'
const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },

    Detail: {
        screen: Detail,
        navigationOptions: {
            headerTitle: 'Detail',
          },
          path: 'detail/:idFilm',
        },

});

const prefix = Platform.OS == 'android' ? 'sampledeeplink://' : 'sampledeeplink://';
const App = createAppContainer(AppNavigator)
const MainApp = () => <App uriPrefix={prefix} />;
export default MainApp;