import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const StoriesTab = (props) => (
  <Svg
    width={42}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21 42c11.598 0 21-9.402 21-21S32.598 0 21 0 0 9.402 0 21s9.402 21 21 21Z"
      fill="#FEFEFE"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.317 23.585c3.475 2.46 6.19 5.261 7.427 10.656l-6.671.012c-1.139-3.78-4.101-6.577-7.642-7.563a32.137 32.137 0 0 0 6.886-3.105Zm-6.54-15.84a3.612 3.612 0 1 1 0 7.224 3.612 3.612 0 0 1 0-7.224ZM6.28 11.818l5.99-3.099c2.848 3.627 4.856 7.041 5.758 10.427 5.886-1.027 9.96-5.103 12.088-10.683l5.604 3.133c-2.35 7.474-10.292 12.451-17.444 14.345-.543 2.684-1.87 5.426-4.115 8.314l-6.934-.337c6.998-6.598 5.116-17.188-.947-22.1Z"
      fill="#2B2A29"
    />
  </Svg>
);

export default StoriesTab;
