import { SvgProps } from 'react-native-svg';
import { Ref } from 'react';
import { AppFont } from './constants/styles/AppFont';

export enum ComponentState {
   Default=0,
   Disabled=1,
   Loading =2,
}
export interface IAppComponent {
   class?: string
   frontFamily?: AppFont
   state?: ComponentState
}

export interface IAnimatedSvg extends SvgProps {
   animatedProps: any;
}

export interface IAnimatedSvgRef extends SVGSVGElement {
   adapter:any;
}
