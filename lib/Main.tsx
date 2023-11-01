import React, { PropsWithChildren } from 'react';
import { ScrollView, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppBottomSheet } from './common/components/AppBottomSheet';
import { flex } from 'nativewind/dist/postcss/to-react-native/properties/flex';
import { EmailIcon } from './common/icons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from './utils/device';

export const Main: React.FC<PropsWithChildren<{}>> = (props) => {
	return <GestureHandlerRootView
		className='bg-stone-100 w-full h-full max-h-full overflow-hidden flex justify-center items-center'>
		<ScrollView>
			<View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH }}>
				{props.children}
			</View>
		</ScrollView>
		{/*<AppBottomSheet />*/}
	</GestureHandlerRootView>;
};