import { useFonts } from 'expo-font';
import './global.css';
import { Main } from './lib/Main';
import React, { useCallback } from 'react';
import { SignInScreen } from './lib/features/authentication/screens/SignInScreen';
import { StatusBar } from 'expo-status-bar';
import { GlobalContextProvider } from './lib/common/contexts/GlobalContext';

// Ensure we import the CSS for Tailwind so it's included in hot module reloads.
//@ts-ignore
const ctx = require.context(
   // If this require.context is not inside the root directory (next to the package.json) then adjust this file path
   // to resolve correctly.
   './node_modules/.cache/expo/tailwind'
);
if (ctx.keys().length) ctx(ctx.keys()[0]);

export default function App() {
   const [fontsLoaded, fontError] = useFonts({
      'Satoshi-Black': require('./assets/fonts/Satoshi-Black.ttf'),
      'Satoshi-Bold': require('./assets/fonts/Satoshi-Bold.ttf'),
      'Satoshi-Light': require('./assets/fonts/Satoshi-Light.ttf'),
      'Satoshi-Medium': require('./assets/fonts/Satoshi-Medium.ttf'),
      'Satoshi-Regular': require('./assets/fonts/Satoshi-Regular.ttf')
   });

   if (!fontsLoaded && !fontError) {
      return null;
   }

   return (
      <GlobalContextProvider>
         <Main>
            <StatusBar style='auto' />
            <SignInScreen />
         </Main>
      </GlobalContextProvider>
   );
}
