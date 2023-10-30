import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import EmailIcon from '../icons/EmailIcon';
import { AppColors } from '../../utils/constants/AppColors';

interface IAppInputField extends Partial<TextInput>, IAppComponent {

}

export const AppInputField: React.FC<IAppInputField> = ({ props }) => {
   const [isFocused, sFocus] = React.useState<boolean>(false);
   const textInputRef = useRef(null);

   const deltaColor = isFocused ? AppColors.main[500] : AppColors.stone[500];

   return (
      <TouchableOpacity className={'h-8 flex flex-col justify-between items-center w-full'}
                        onPress={() => textInputRef.current.focus()}>
         <View className={'h-8 flex flex-row justify-between items-center w-full gap-2'}>
            <EmailIcon width={22} height={22} fill={deltaColor} />
            <TextInput className='flex-1 h-full'
                       placeholder={props.placeholder}
                       ref={textInputRef}
                       onFocus={() => sFocus(true)}
                       onBlur={() => sFocus(false)}
               //@ts-ignore
                       style={{ outlineStyle: 'none', fontFamily: 'Satoshi-Regular' }} />
            <TouchableOpacity className='h-full flex justify-center'><Text className="text-test">{'Forgot?'}</Text></TouchableOpacity>
         </View>
         <View className='w-full'
               style={{ borderBottomWidth: .8, borderBottomColor: deltaColor }}
         />
      </TouchableOpacity>
   );
};

