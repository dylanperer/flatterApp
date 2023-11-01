import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import EmailIcon from '../icons/EmailIcon';
import { AppColors } from '../../utils/constants/styles/AppColors';
import Animated, {
	useAnimatedProps,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';

interface IAppInputField extends Partial<TextInput>, IAppComponent {

}

export const AppInputField: React.FC<IAppInputField> = ({ props }) => {
	const textInputRef = useRef(null);

	const deltaColor = useSharedValue<string>(AppColors.stone[400]);

	const onFocus = () => {
		deltaColor.value = withTiming(AppColors.main[500], { duration: 300 });
	};

	const onBlur = () => {
		deltaColor.value = withTiming(AppColors.stone[400], { duration: 300 });
	};

	const animatedProps = useAnimatedProps(() => ({
		fill: deltaColor.value
	}));

	return (
		<TouchableOpacity className='h-8 flex flex-col justify-between items-center w-full'
			onPress={() => textInputRef.current.focus()}>
			<View className={'h-8 flex flex-row justify-between items-center w-full gap-2'}>
				<EmailIcon animatedProps={animatedProps} width={22} height={22} />
				<TextInput className='flex-1 h-full'
					placeholder={props.placeholder}
					ref={textInputRef}
					onFocus={onFocus}
					onBlur={onBlur}
					//@ts-ignore
					style={{ outlineStyle: 'none', fontFamily: 'Satoshi-Regular', color: AppColors.stone[700] }}
					placeholderTextColor={AppColors.stone[400]} />
				<TouchableOpacity className='h-full flex justify-center'>
					<Text className='text-test' style={{ fontFamily: 'Satoshi-Medium' }}>{'Forgot?'}</Text>
				</TouchableOpacity>
			</View>
			<Animated.View className='w-full'
				//@ts-ignore
				style={{
					borderBottomWidth: 1,
					borderColor: deltaColor
				}}
			/>
		</TouchableOpacity>
	);
};

