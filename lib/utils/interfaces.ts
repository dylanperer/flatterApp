import { SvgProps } from 'react-native-svg';
import { Ref } from 'react';

export interface IAppComponent {
   _className?: string
}

export interface IAnimatedSvg extends SvgProps {
   animatedProps: any;
}

export interface IAnimatedSvgRef extends SVGSVGElement {
   adapter:any;
}
