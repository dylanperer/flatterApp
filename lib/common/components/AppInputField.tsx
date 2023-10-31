import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import EmailIcon from '../icons/EmailIcon';
import { AppColors } from '../../utils/constants/AppColors';
import { useAnimationState } from 'moti';
import Animated, {
   useAnimatedStyle,
   useSharedValue,
   withRepeat,
   withSpring,
   withTiming,
} from 'react-native-reanimated';

interface IAppInputField extends Partial<TextInput>, IAppComponent {

}

export const AppInputField: React.FC<IAppInputField> = ({ props }) => {
   const textInputRef = useRef(null);

   const AnimatedTextInput = Animated.createAnimatedComponent(EmailIcon);
   const deltaColor = useSharedValue<string>(AppColors.stone[500]);

   const onFocus = () => {
      deltaColor.value = withTiming(AppColors.main[500], { duration: 300 });
   };

   const onBlur = () => {
      deltaColor.value = withTiming(AppColors.stone[500], { duration: 300 });
   };

   return (
      <TouchableOpacity className={'h-8 flex flex-col justify-between items-center w-full'}
                        onPress={() => textInputRef.current.focus()}>
         <View className={'h-8 flex flex-row justify-between items-center w-full gap-2'}>
            <AnimatedTextInput width={22} height={22} fill={deltaColor} />
            <TextInput className='flex-1 h-full'
                       placeholder={props.placeholder}
                       ref={textInputRef}
                       onFocus={onFocus}
                       onBlur={onBlur}
               //@ts-ignore
                       style={{ outlineStyle: 'none', fontFamily: 'Satoshi-Regular' }} />
            <TouchableOpacity className='h-full flex justify-center'>
               <Text className='text-test'>{'Forgot?'}</Text>
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

