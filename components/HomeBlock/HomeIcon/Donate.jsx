import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Donate = (props) => (
  <Svg
    width={22}
    height={37}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M21.814 24.16c0 2.01-.739 3.717-2.215 5.12-1.477 1.402-3.619 2.252-6.423 2.55V36h-3.054v-4.133a20.865 20.865 0 0 1-5.212-1.005C3.27 30.316 1.968 29.62 1 28.777l1.676-3.761c.918.745 2.035 1.371 3.35 1.88 1.316.51 2.681.826 4.096.95v-7.447c-1.762-.422-3.233-.887-4.412-1.396a7.65 7.65 0 0 1-2.96-2.234c-.794-.98-1.191-2.278-1.191-3.891 0-2.011.732-3.724 2.196-5.139C5.22 6.324 7.342 5.48 10.122 5.207V1h3.054v4.133c1.39.074 2.749.31 4.077.707 1.328.398 2.488.919 3.481 1.564l-1.527 3.76a15.493 15.493 0 0 0-6.031-2.01v7.522c1.787.422 3.27.88 4.449 1.377a7.636 7.636 0 0 1 2.979 2.216c.806.98 1.21 2.277 1.21 3.89ZM6.362 12.654c0 .82.322 1.477.968 1.974.645.496 1.576.918 2.792 1.266V9.266c-1.266.199-2.209.596-2.83 1.191-.62.596-.93 1.328-.93 2.197Zm6.814 15.117c1.315-.198 2.29-.583 2.923-1.154.632-.57.949-1.278.949-2.122 0-.844-.335-1.52-1.005-2.03-.67-.508-1.626-.937-2.867-1.284v6.59Z"
      fill="#2B2A29"
      stroke="#2B2A29"
      strokeWidth={0.076}
      strokeMiterlimit={22.926}
    />
  </Svg>
);

export default Donate;
