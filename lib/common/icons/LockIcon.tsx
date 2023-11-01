import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { Ref, forwardRef } from 'react';
import Animated from 'react-native-reanimated';
import { IAnimatedSvg } from '../../utils/interfaces';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const SvgLockIcon = (props: IAnimatedSvg, ref: Ref<SVGSVGElement>) => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={24}
		height={24}
		fill='none'
		viewBox='0 0 20 20'
		ref={ref}
		{...props}>
		<AnimatedPath
			animatedProps={props.animatedProps}
			d='M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1-7.208a2.5 2.5 0 1 1 2 0V14H9v-3.208Z'
		/>
	</Svg>
);
const ForwardRef = forwardRef(SvgLockIcon);
export default ForwardRef;
