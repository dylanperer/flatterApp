import React from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { AppInputField } from '../../../common/components/AppInputField';

interface ISignInScreen {

}

export const SignInScreen: React.FC = () => {
   return (
      <View className="w-full flex flex-col max-w-[400px]">
         <AppInputField props={{placeholder: 'email'}}/>
      </View>
   );
};

