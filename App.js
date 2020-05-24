import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Provider as AuthProvider} from './src/context/AuthContext';

import Account from './src/screens/Account'
import SignIn from './src/screens/SignIn'
import SignUp  from './src/screens/SignUp'
import TrackCreate  from './src/screens/TrackCreate'
import TrackDet from './src/screens/TrackDet'
import TrackList from './src/screens/TrackList'
import { setNavigator } from './src/navigationRef';


const SwitchNavigator= createSwitchNavigator({
  loginFlow:createStackNavigator({
    SignUp:SignUp,
    SignIn:SignIn
  }),
  mainFlow:createBottomTabNavigator({
    listFlow:createStackNavigator({
      TrackList:TrackList,
      Detail:TrackDet
    }),
    Create:TrackCreate,
    Account:Account

  })
});

const App=createAppContainer(SwitchNavigator);

export default ()=>{
  return(
    <AuthProvider >
      <App ref={(navigator)=>{setNavigator(navigator) }} />
    </AuthProvider>
  );
};
