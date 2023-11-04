import { Device, UserDevice } from '../../utils/device';
import React, { FC } from 'react';
import { AnimatedLottieViewProps } from 'lottie-react-native';
import { View } from 'react-native';
import { IAppComponent } from '../../utils/interfaces';
import { twMerge } from 'tailwind-merge';

export const UseLottie = () => {
   const component: FC<AnimatedLottieViewProps & IAppComponent> = (props) => {
      if (UserDevice === Device.WEB) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
         const Foo = require('lottie-react').default;
         return <View className={twMerge('flex justify-center items-center', props.class)}><Foo
            animationData={props.source} loop={true} /></View>;
      } else {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
         const Foo = require('lottie-react-native');
         return <View className={twMerge('flex justify-center items-center', props.class)}><Foo source={props.source} loop
            autoPlay /></View>;
      }
   };

   return { Lottie: component };
};

