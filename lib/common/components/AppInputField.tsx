import React from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';

interface IAppInputField {

}

export const AppInputField: React.FC<IAppInputField> = () => {
   return (
      <TouchableOpacity className={'h-10 flex flex-row justify-between items-center w-full'}>
         <View><Text>{'Icon'}</Text></View>
         <TextInput className={'h-10 bg-red-600 flex-1'} />
         <View><Text>{'Icon'}</Text></View>
      </TouchableOpacity>
   );
};

