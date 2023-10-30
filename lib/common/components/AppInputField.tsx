import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import EmailIcon from '../icons/EmailIcon';

interface IAppInputField extends Partial<TextInput>, IAppComponent {

}

export const AppInputField: React.FC<IAppInputField> = ({ props }) => {
   const [isFocused, sFocused] = React.useState();
   const textInputRef = useRef(null);
   return (
      <TouchableOpacity className={'h-8 flex flex-col justify-between items-center w-full'} onPress={()=>textInputRef.current.focus()}>
         <View className={'h-8 flex flex-row justify-between items-center w-full gap-2'}>
            <EmailIcon width={22} height={22} />
            <TextInput className='flex-1 bg-green-400 h-full'
                       placeholder={props.placeholder}
                       ref={textInputRef}
                       //@ts-ignore
                       style={{ outlineStyle: 'none', fontFamily: 'Satoshi-Regular' }} />
            <TouchableOpacity className='h-full flex justify-center'><Text>{'Forgot?'}</Text></TouchableOpacity>
         </View>
         <View className='border-t-2 border-red-500 w-full' />
      </TouchableOpacity>
   );
};

