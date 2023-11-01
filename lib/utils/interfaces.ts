import { SvgProps } from 'react-native-svg';

export interface IAppComponent {
   _className?: string
}

export interface IAnimatedSvg extends SvgProps {
   animatedProps: any;
}
