import React from 'react';
import {Stack} from 'expo-router';
import {AppRoute} from '../../lib/utils/constants/nav/routes';
import {isIos} from '../../lib/utils/device';

function _Layout() {
   return (
      <Stack screenOptions={{
         animation: isIos? 'fade': 'none',
         animationDuration: 200,
         headerShown: false,
         header: ()=>null, contentStyle: {backgroundColor: 'white'}}}>
         <Stack.Screen name={AppRoute.SignIn}/>
         <Stack.Screen name={AppRoute.SignUp}/>
      </Stack>
   );
}

export default _Layout;