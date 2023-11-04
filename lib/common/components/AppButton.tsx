import { IAppComponent } from '../../utils/interfaces';
import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AppText } from './AppText';
import { AppFont } from '../../utils/constants/styles/AppFont';
import { AppColors } from '../../utils/constants/styles/AppColors';
import { twMerge } from 'tailwind-merge';
import { Test } from './Test';
import { Device, UserDevice } from '../../utils/device';
import { UseLottie } from '../hooks/useLottie';

export interface IAppButton extends IAppComponent {
  onClick: () => void;
}

export const AppButton: FC<IAppButton> = (props) => {
   const { Lottie } = UseLottie();

   return <TouchableOpacity
      className={twMerge('flex justify-center items-center w-50 h-14 rounded-full bg-main-500', props.class)}
      style={{
         shadowColor: AppColors.stone[800],
         shadowOpacity: .15,
         shadowRadius: 4,
         elevation: 5
      }}
      onPress={props.onClick}
   >
      {/*<Animation*/}
      {/*   s*/}
      {/*   loop*/}
      {/*   autoplay*/}
      {/*/>*/}
      {/*<Anim source={require('../../../assets/lottie/spinner.json')} autoPlay loop/>*/}
      {/*<AppText class='text-stone-200 text-lg' frontFamily={AppFont.SatoshiMedium}>{'Sign in'}</AppText>*/}
      <Lottie class="w-20 h-20" source={require('../../../assets/lottie/spinner.json')}/>
   </TouchableOpacity>;
};