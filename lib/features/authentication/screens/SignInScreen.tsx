import React from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { AppInputField } from '../../../common/components/AppInputField';
import { AppText } from '../../../common/components/AppText';
import { EmailIcon, LockIcon } from '../../../common/icons';
import { AppInteractiveLabel } from '../../../common/components/AppInteractiveLabel';

interface ISignInScreen {

}

export const SignInScreen: React.FC = () => {
	return (
		<View
			className='w-full flex flex-col justify-start items-center h-full px-2 py-24 border-2 border-red-600'>
			<View className='self-start flex flex-col gap-y-2 mb-16'>
				<AppText _className='text-4xl'>{'Sign'}</AppText>
				<AppText>{'Sub header'}</AppText>
			</View>
			<View className='flex flex-col w-full gap-y-8'>
				<View>
					<AppInputField prefix={EmailIcon} placeholder='email' />
				</View>
				<View>
					<AppInputField prefix={LockIcon}
						postfix={
							<AppInteractiveLabel
								onClick={() => {
								}}>
								{'Forgot?'}
							</AppInteractiveLabel>} placeholder='password' />
				</View>
			</View>
		</View>
	);
};

