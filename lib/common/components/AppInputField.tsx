import React from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import EmailIcon from '../icons/EmailIcon';

interface IAppInputField {

}

export const AppInputField: React.FC<IAppInputField> = () => {
   return (
      <TouchableOpacity className={'h-10 flex flex-row justify-between items-center w-full'}>
         <EmailIcon/>
         <TextInput className={'h-10 bg-red-600 flex-1'} />
         <View><Text>{'Icon'}</Text></View>
      </TouchableOpacity>
   );
};

