import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const IconBottomHomeActive = (props) => (
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
      d="M37.075 16.687a.9.9 0 1 1-1.15 1.383L21.023 5.648 6.075 17.881a.903.903 0 0 1-1.143-1.397L20.454 3.781l.002.002a.9.9 0 0 1 1.145.005l15.474 12.9ZM15.703 33.436H9.178c-.57 0-1.033-.462-1.033-1.032V18.839c.001-.298.13-.594.38-.798L20.366 8.35l.002.002a1.028 1.028 0 0 1 1.308.006l11.734 9.781c.27.186.447.498.447.85v13.415c0 .57-.462 1.032-1.032 1.032h-6.787c-.575 0-1.378-.264-1.378-1.403v-6.797a3.668 3.668 0 0 0-3.658-3.658h-.158a3.669 3.669 0 0 0-3.657 3.658v6.797c0 .462-.042 1.414-1.485 1.403Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12.773}
        y1={4.814}
        x2={29.193}
        y2={31.416}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E74B23" />
        <Stop offset={0.302} stopColor="#D8343C" />
        <Stop offset={1} stopColor="#C81D55" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default IconBottomHomeActive;
