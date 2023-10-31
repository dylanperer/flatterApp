import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheet } from './common/components/BottomSheet';

export const Main: React.FC<PropsWithChildren<{}>> = (props) => {
  return <GestureHandlerRootView className='bg-stone-100 w-full h-full max-h-full overflow-hidden flex justify-center items-center'>
    {props.children}
    <BottomSheet />
  </GestureHandlerRootView>;
};