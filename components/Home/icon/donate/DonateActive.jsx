import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const DonateActive = (props) => (
  <Svg
    width={18}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.867 19.843c0 1.727-.635 3.194-1.904 4.4-.634.601-1.41 1.085-2.33 1.45-.912.362-1.965.608-3.157.736V30H7.81v-3.538a18.857 18.857 0 0 1-2.273-.293 17.091 17.091 0 0 1-2.17-.567c-.702-.234-1.333-.5-1.891-.798a7.8 7.8 0 0 1-1.463-.991L0 23.8l1.455-3.266.027.021c.391.318.826.61 1.302.878a12.719 12.719 0 0 0 5.027 1.535v-6.323a30.227 30.227 0 0 1-2.057-.565c-.63-.2-1.197-.408-1.702-.626a6.557 6.557 0 0 1-2.543-1.919 4.317 4.317 0 0 1-.77-1.47 6.395 6.395 0 0 1-.256-1.876c0-.863.158-1.663.472-2.4a6.168 6.168 0 0 1 1.416-2.015c.63-.608 1.4-1.093 2.31-1.455.905-.36 1.948-.598 3.13-.716V0h2.665v3.538a15.02 15.02 0 0 1 3.47.605c.569.17 1.102.367 1.6.59.497.224.96.474 1.385.751l.018.012c-.44 1.089-.883 2.177-1.325 3.265l-.026-.015a13.193 13.193 0 0 0-5.122-1.714v6.386c.756.18 1.45.366 2.08.562.635.196 1.206.401 1.71.614a6.59 6.59 0 0 1 2.559 1.903c.348.422.608.912.782 1.47.173.558.26 1.183.26 1.876ZM4.645 9.998c0 .347.069.659.205.937.136.277.34.521.614.731.274.211.61.407 1.006.586.388.176.836.337 1.341.483V7.13c-.527.085-.987.21-1.381.376-.4.169-.733.38-.996.632-.263.253-.46.534-.592.844-.13.31-.197.649-.197 1.017Zm5.83 12.905a6.7 6.7 0 0 0 1.435-.369 3.351 3.351 0 0 0 1.023-.608c.268-.242.47-.512.603-.812.134-.299.2-.627.2-.985 0-.357-.07-.678-.211-.964a2.131 2.131 0 0 0-.638-.751c-.565-.429-1.369-.79-2.411-1.086v5.575Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-0.403}
        y1={20.105}
        x2={18.27}
        y2={9.895}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E54D22" />
        <Stop offset={0.302} stopColor="#E53541" />
        <Stop offset={1} stopColor="#E61C61" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default DonateActive;
