import { View } from 'react-native';
import React from 'react';
import { Device, UserDevice } from '../../utils/device';
import LottieView from 'lottie-react-native';
export const Test = () => {

   console.log('@> 1');
   if (UserDevice === Device.WEB) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const Foo = require('lottie-react').default;
      return <View>
         <Foo animationData={require('../../../assets/lottie/spinner.json')} loop={true} />{';\r'}
      </View>;
   }
   else{
      console.log('ok ios');
      return <LottieView source={require('../../../assets/lottie/spinner.json')} loop autoPlay/>;
   }
};