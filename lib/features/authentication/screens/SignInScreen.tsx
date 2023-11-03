import React from 'react';
import { TextInput, TouchableOpacity, Text, View, Image } from 'react-native';
import { AppInputField } from '../../../common/components/AppInputField';
import { AppText } from '../../../common/components/AppText';
import { EmailIcon, LockIcon, Logo } from '../../../common/icons';
import { AppInteractiveLabel } from '../../../common/components/AppInteractiveLabel';
import { AppFont } from '../../../utils/constants/styles/AppFont';
import { AppCheckBox } from '../../../common/components/AppCheckBox';
import { AppButton } from '../../../common/components/AppButton';
import { ThirdPartyAuth } from '../../../common/components/ThirdPartyAuth';

interface ISignInScreen {

}

export const SignInScreen: React.FC = () => {
   return (
      <View
         className='w-full flex flex-col justify-start items-center h-full px-2 py-16'>
         <View className='mb-16'>
            <Logo width={65} height={65} />
         </View>
         <View className='self-start flex flex-col gap-y-2 mb-16'>
            <AppText _frontFamily={AppFont.SatoshiMedium} _className='text-3xl'>{'Sign in'}</AppText>
            <AppText>{'Hello there! Let\'s get in back to it'}</AppText>
         </View>
         <View className='flex flex-col w-full'>
            <AppInputField prefix={EmailIcon} placeholder='email' _className='mb-8' />
            <AppInputField prefix={LockIcon}
               _className='mb-8'
               placeholder='password'
               postfix={
                  <AppInteractiveLabel
                     onClick={() => {
                     }}>
                     {'Forgot?'}
                  </AppInteractiveLabel>}
            />
            <AppCheckBox label='Remember me' _className='self-end mb-8' onChange={() => {
            }} />
         </View>
         <View>
         </View>
         <View>
            <AppButton />
         </View>
         <View>
            <ThirdPartyAuth prefixText='Or, login with...' postfixText={'Don\'t have one yet?'}
               postfixInlineSlot={<AppInteractiveLabel onClick={() => {
               }}>{'Join now'}</AppInteractiveLabel>} />
         </View>
      </View>);
};

