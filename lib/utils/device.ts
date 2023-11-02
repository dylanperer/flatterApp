import { Dimensions, Platform } from 'react-native';
export const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

export enum Device {
  IOS = 'ios',
  ANDROID = 'android',
  WEB = 'web'
}

const getDevice = () => {
   switch (Platform.OS) {
   case 'ios':
      return Device.IOS;
   case 'android':
      return Device.ANDROID;
   case 'web':
      return Device.WEB;
   }
};

export const UserDevice: Device = getDevice();
