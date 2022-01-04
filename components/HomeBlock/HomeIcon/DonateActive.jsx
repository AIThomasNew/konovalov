import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const DonateActive = (props) => (
  <Svg
    width={21}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M20.845 23.15c0 2.016-.74 3.727-2.221 5.133-.74.702-1.646 1.267-2.719 1.692-1.064.423-2.292.71-3.683.859V35h-3.11v-4.128a21.983 21.983 0 0 1-2.65-.342 19.94 19.94 0 0 1-2.532-.661 14.302 14.302 0 0 1-2.207-.931 9.099 9.099 0 0 1-1.706-1.156L0 27.767l1.698-3.81.03.024c.458.37.964.712 1.52 1.024.557.312 1.163.595 1.818.848a14.817 14.817 0 0 0 4.047.943V19.42c-.872-.209-1.672-.429-2.4-.659a21.109 21.109 0 0 1-1.986-.73A7.646 7.646 0 0 1 1.76 15.79a5.036 5.036 0 0 1-.897-1.716c-.2-.65-.3-1.38-.3-2.188 0-1.007.185-1.94.552-2.8.367-.858.917-1.642 1.651-2.35C3.5 6.026 4.4 5.46 5.462 5.038c1.055-.42 2.272-.698 3.65-.836V0h3.11v4.128a17.523 17.523 0 0 1 4.048.705c.664.199 1.286.429 1.867.69.58.26 1.12.552 1.616.875l.021.014c-.514 1.27-1.03 2.54-1.546 3.81l-.03-.018a15.392 15.392 0 0 0-5.976-2v7.45a37.15 37.15 0 0 1 2.427.655c.74.23 1.406.469 1.996.717.59.249 1.135.558 1.632.928.498.37.949.801 1.353 1.292a5.01 5.01 0 0 1 .912 1.716c.202.65.303 1.38.303 2.188ZM5.42 11.664c0 .405.08.769.238 1.093.159.324.398.609.716.853.32.247.712.475 1.174.684.454.206.975.394 1.565.564v-6.54a7.032 7.032 0 0 0-1.612.438 3.768 3.768 0 0 0-1.162.737 2.962 2.962 0 0 0-.69.984c-.153.362-.23.758-.23 1.187Zm6.802 15.056a7.817 7.817 0 0 0 1.673-.43c.482-.19.88-.427 1.194-.71.312-.282.547-.597.703-.947.156-.349.234-.732.234-1.149a2.5 2.5 0 0 0-.247-1.125 2.485 2.485 0 0 0-.744-.876c-.659-.5-1.597-.923-2.813-1.267v6.504Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={-0.47}
        y1={23.456}
        x2={21.315}
        y2={11.544}
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
