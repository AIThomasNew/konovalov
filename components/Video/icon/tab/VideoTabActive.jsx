import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const IconBottomVideoActive = (props) => (
  <Svg
    width={43}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.996 42c11.598 0 21-9.402 21-21s-9.402-21-21-21-21 9.402-21 21 9.402 21 21 21Z"
      fill="#FEFEFE"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.29 5.536H32.7c.89 0 1.7.364 2.285.95.586.586.95 1.395.95 2.285v19.13c0 .89-.364 1.699-.95 2.285a3.226 3.226 0 0 1-2.285.95H11.29c-.89 0-1.7-.364-2.285-.95a3.226 3.226 0 0 1-.95-2.286V8.772c0-.89.364-1.7.95-2.286a3.226 3.226 0 0 1 2.285-.95Zm-2.588 30.15a.794.794 0 0 1 0-1.587h5.706a.794.794 0 0 1 0 1.587H8.701Zm9.233-1.798a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3.524 1.798a.794.794 0 0 1 0-1.587h13.828a.794.794 0 0 1 0 1.587H21.46Zm2.254-21.144 4.936 3.163a.74.74 0 0 1 .013 1.253l-9.859 6.317a.741.741 0 0 1-1.18-.597V11.993h.002a.74.74 0 0 1 1.139-.622l4.95 3.171Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={14.716}
        y1={7.74}
        x2={29.236}
        y2={28.29}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E74B23" />
        <Stop offset={0.51} stopColor="#D8343C" />
        <Stop offset={1} stopColor="#C81D55" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default IconBottomVideoActive;
