import React from 'react';
import {Stack} from 'expo-router';

function _Layout() {
   return (
      <Stack screenOptions={{headerShown: false,  header: ()=>null, contentStyle: {backgroundColor: 'white'} }}>
         <Stack.Screen name="SignIn"/>
      </Stack>
   );
}

export default _Layout;