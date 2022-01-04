import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const IconBottomStoriesActive = (props) => (
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
      d="M26.18 22.738c3.828 2.591 7.553 5.927 8.907 11.837l-6.84.012c-1.346-4.47-5.925-8.137-10.057-8.458-.565 2.732-1.923 5.522-4.206 8.46l-7.11-.346c7.176-6.765 5.246-17.622-.97-22.659l6.14-3.176c2.921 3.718 4.98 7.219 5.905 10.69 6.035-1.053 10.211-5.232 12.393-10.954l5.746 3.213c-1.536 4.887-5.405 8.732-9.908 11.38Zm-1.71-11.626a3.703 3.703 0 1 0-7.406 0 3.703 3.703 0 0 0 7.406 0Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.865}
        y1={12.806}
        x2={33.127}
        y2={29.191}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E54D22" />
        <Stop offset={0.451} stopColor="#E53541" />
        <Stop offset={1} stopColor="#E61C61" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default IconBottomStoriesActive;
