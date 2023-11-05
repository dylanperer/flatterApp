import React, {FC, PropsWithChildren, useEffect} from 'react';
import {ComponentState, IAppComponent} from '../../utils/interfaces';
import Animated, {useSharedValue, withRepeat, withTiming, Easing} from 'react-native-reanimated';


interface IFadeIn extends IAppComponent{
    duration: number
}
export const FadeIn:FC<PropsWithChildren<IFadeIn>> = (props)=>{
   const opacityDelta = useSharedValue<number>(0);

   useEffect(() => {
      if(props.state !== ComponentState.Disabled) {
         opacityDelta.value = withTiming(100, {duration: props.duration || 500});}
   }, []);


   return <Animated.View className="w-fit h-fit" style={{opacity: opacityDelta}}>
      {props.children}
   </Animated.View>;
};