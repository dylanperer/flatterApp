import { Text } from 'react-native';
import React from 'react';
import { TextProps } from 'react-native/Libraries/Text/Text';
import { twMerge } from 'tailwind-merge';
import { IAppComponent } from '../../utils/interfaces';

interface IAppText extends TextProps, IAppComponent {
}

export const AppText: React.FC<IAppText> = (props) => {
	return <Text {...props} style={{ fontFamily: 'Satoshi-Regular' }}
		className={twMerge('select-none text-stone-700', props._className)}>{props.children}</Text>;
};