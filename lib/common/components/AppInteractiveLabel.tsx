import { Text, TextBase, TouchableOpacity } from 'react-native';
import React from 'react';
import { strMerge } from '../../utils/functions';
import { TextProps } from 'react-native/Libraries/Text/Text';
import { twMerge } from 'tailwind-merge';

interface IAppInteractiveLabel extends TextProps, IAppComponent {
  onClick: () => void;
}

export const AppInteractiveLabel: React.FC<IAppInteractiveLabel> = (props) => {
	return <TouchableOpacity className={twMerge('flex justify-center items-center', props._className)}>
		<Text {...props} style={{ fontFamily: 'Satoshi-Medium' }} className="text-main-500">{props.children}</Text>
	</TouchableOpacity>;
};