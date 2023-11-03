import { Text, TouchableOpacity, View } from 'react-native';
import { IAppComponent } from '../../utils/interfaces';
import React, { FC, ReactNode } from 'react';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../icons';
import { AppText } from './AppText';

interface IThirdPartAuth extends IAppComponent {
  prefixText?: string;
  postfixText?: string;
  postfixInlineSlot?: ReactNode;
}

export const ThirdPartyAuth: FC<IThirdPartAuth> = (props) => {
   return <View className='flex flex-col justify-center items-center w-full gap-y-8'>
      {props.prefixText && <AppText _className='text-stone-500'>{props.prefixText}</AppText>}
      <View className='flex-row justify-between px-8 w-full'>
         <TouchableOpacity>
            <GoogleIcon />
         </TouchableOpacity>
         <TouchableOpacity>
            <FacebookIcon />
         </TouchableOpacity>
         <TouchableOpacity>
            <AppleIcon />
         </TouchableOpacity>
      </View>
      <View className='flex flex-row'>
         {props.postfixText && <AppText _className='text-stone-500 mr-2'>{props.postfixText}</AppText>}
         {props.postfixInlineSlot}
      </View>
   </View>;
};