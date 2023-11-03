import { AppColorScheme } from '../common/contexts/GlobalContext';

export function strMerge(...args: string[]): string {
   return args.join(' ');
}


export function darkMode(currentColorScheme: AppColorScheme, className: string) {
   if (currentColorScheme === AppColorScheme.DARK) {
      return className;
   }
}