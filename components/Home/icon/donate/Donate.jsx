import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Donate = (props) => (
  <Svg
    width={19}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.84 20.851c0 1.724-.633 3.186-1.898 4.388-1.266 1.203-3.101 1.931-5.506 2.186V31H8.82v-3.543a17.876 17.876 0 0 1-4.468-.861C2.947 26.128 1.83 25.532 1 24.808l1.436-3.223c.787.638 1.745 1.176 2.873 1.612 1.127.436 2.297.707 3.51.814v-6.383c-1.51-.362-2.771-.76-3.782-1.197A6.557 6.557 0 0 1 2.5 14.516c-.68-.84-1.021-1.952-1.021-3.335 0-1.724.627-3.192 1.883-4.404 1.255-1.213 3.074-1.937 5.457-2.17V1h2.617v3.543c1.192.063 2.357.266 3.495.606 1.138.34 2.133.787 2.984 1.34l-1.309 3.224a13.28 13.28 0 0 0-5.17-1.724v6.447c1.532.362 2.803.755 3.814 1.181a6.547 6.547 0 0 1 2.553 1.899c.692.84 1.037 1.952 1.037 3.335ZM5.596 10.99c0 .702.276 1.266.83 1.692.553.425 1.35.787 2.393 1.085v-5.68c-1.085.17-1.893.51-2.425 1.02a2.508 2.508 0 0 0-.798 1.883Zm5.84 12.958c1.128-.17 1.963-.5 2.505-.99.543-.489.814-1.095.814-1.819 0-.723-.287-1.303-.861-1.74-.575-.435-1.394-.802-2.458-1.1v5.649Z"
      fill="#2B2A29"
      stroke="#2B2A29"
      strokeWidth={0.076}
      strokeMiterlimit={22.926}
    />
  </Svg>
);

export default Donate;
