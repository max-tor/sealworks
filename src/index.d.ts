interface StylesDictionary {
  [className: string]: string;
}

declare module '*.css' {
  const styles: StylesDictionary;
  export default styles;
}

declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  import { FC, SVGProps } from 'react';
  export const ReactComponent: FC<SVGProps<SVGElement>>;
}
