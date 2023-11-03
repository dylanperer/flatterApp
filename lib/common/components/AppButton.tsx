import { IAppComponent } from '../../utils/interfaces';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { AppText } from './AppText';
import { AppFont } from '../../utils/constants/styles/AppFont';
import { AppColors } from '../../utils/constants/styles/AppColors';
import { twMerge } from 'tailwind-merge';

export interface IAppButton extends IAppComponent {
  onClick: () => void;
}

export const AppButton: FC<IAppButton> = (props) => {
   return <TouchableOpacity
      className={twMerge('flex justify-center items-center w-50 h-14 rounded-full bg-main-500', props._className)}
      style={{
         shadowColor: AppColors.stone[800],
         shadowOpacity: .15,
         shadowRadius: 4,
         elevation: 5
      }}
      onPress={props.onClick}
   >
      <AppText _className='text-stone-200 text-lg' _frontFamily={AppFont.SatoshiMedium}>{'Sign in'}</AppText>
   </TouchableOpacity>;
};