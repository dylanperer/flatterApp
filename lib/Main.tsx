import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppBottomSheet } from './common/components/AppBottomSheet';

export const Main: React.FC<PropsWithChildren<{}>> = (props) => {
	return <GestureHandlerRootView className='bg-stone-100 w-full h-full max-h-full overflow-hidden flex justify-center items-center'>
		{props.children}
		<AppBottomSheet />
	</GestureHandlerRootView>;
};