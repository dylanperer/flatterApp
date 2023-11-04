import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './utils/device';
import { twMerge } from 'tailwind-merge';
import { useGlobalContext } from './common/contexts/GlobalContext';
import { withDarkMode } from './utils/functions';

export const Main: React.FC<PropsWithChildren> = (props) => {
   const { colorScheme: [cs] } = useGlobalContext();

   return <GestureHandlerRootView
      className={twMerge('bg-stone-100 w-full h-full max-h-full overflow-hidden flex justify-center items-center',
         withDarkMode(cs, 'bg-darkMode-900'))}>
      <ScrollView>
         <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH, maxWidth: 450 }}>
            {props.children}
         </View>
      </ScrollView>
      {/*<AppBottomSheet />*/}
   </GestureHandlerRootView>;
};