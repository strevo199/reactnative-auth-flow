import { View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Login,EmailComfirm, Signup,ResetPassword, NewPassword} from './src/screens';
import { COLORS, SIZES} from './src/constants'
import { ActionIcon } from './src/components';
import {help, arrowBack } from './src/constants/icons';

const Stack = createStackNavigator()
const App = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen
          options={{
            headerTransparent: true,
            title:null,
            headerBackTitle: ' ',
            headerTintColor:COLORS.white,
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            headerTransparent: true,
            title:null,
            headerBackTitle: ' ',
            headerTintColor:COLORS.white,
          }}
          name='SignUp'
          component={Signup}
        />
        <Stack.Screen
          options={{
            title: null,
            headerShadowVisible: false,
            headerBackTitle: ' ',
            headerTintColor:COLORS.primary,
            headerRight: () => {
              return (
                <ActionIcon
                  icon={help}
                  style={{
                    marginRight: SIZES.padding,
                  }}
                />
              )
            }
          }}
        name='ResetPassword' component={ResetPassword} />

        <Stack.Screen
           name='EmailComfirm' 
           options={{
             headerShown: false
           }}
           component={EmailComfirm} />
        
        <Stack.Screen
           name='NewPassword' 
           options={{
             title: null,
             headerTintColor: COLORS.primary,
             headerBackTitle:' ',
             headerShadowVisible: false,
             headerRight: null,
            //  headerLeft: () => {
            //    return (
            //      <ActionIcon
            //       icon={arrowBack}
            //       onpress ={() => console.log('alal')}
            //       style = {{
            //         marginLeft: SIZES.padding,
            //       }} 
            //      />
            //    )
            //  }
           }}
           component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
