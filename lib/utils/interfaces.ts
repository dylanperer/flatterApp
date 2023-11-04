import { SvgProps } from 'react-native-svg';
import { Ref } from 'react';
import { AppFont } from './constants/styles/AppFont';

export interface IAppComponent {
   class?: string
   frontFamily?: AppFont
}

export interface IAnimatedSvg extends SvgProps {
   animatedProps: any;
}

export interface IAnimatedSvgRef extends SVGSVGElement {
   adapter:any;
}
