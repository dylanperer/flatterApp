import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Ref, forwardRef, useEffect } from 'react';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Test extends SvgProps {
   animatedProps: any;
}

const SvgEmailIcon = (props: Test, ref: Ref<SVGSVGElement>) => {
   return (
      <Svg
         xmlns='http://www.w3.org/2000/svg'
         width={24}
         height={24}
         viewBox='0 -960 960 960'
         ref={ref}
         {...props}>
         <AnimatedPath animatedProps={props.animatedProps}
                       d='M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z' />
      </Svg>
   );
};
const ForwardRef = forwardRef(SvgEmailIcon);
export default ForwardRef;