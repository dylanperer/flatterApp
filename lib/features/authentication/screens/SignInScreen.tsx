import React from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { AppInputField } from '../../../common/components/AppInputField';
import { AppText } from '../../../common/components/AppText';
import { EmailIcon, LockIcon } from '../../../common/icons';

interface ISignInScreen {

}

export const SignInScreen: React.FC = () => {
	return (
		<View
			className='w-full flex flex-col justify-center items-center flex-1 px-2 py-12 max-w-[450px] border-2 border-red-600'>
			<View className='self-start flex flex-col gap-2'>
				<AppText _className='text-4xl'>{'Sign'}</AppText>
				<AppText>{'Sub header'}</AppText>
			</View>
			<View className='flex flex-col w-full'>
				<AppInputField prefix={EmailIcon}
				/>
				<AppInputField prefix={EmailIcon}
				/>
			</View>
		</View>
	);
};

