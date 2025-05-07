declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg' {
  import type { FunctionComponent, SVGAttributes } from 'react';

  const content: FunctionComponent<SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'

declare const __IS_DEV__: boolean;
