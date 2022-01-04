import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const Add = (props) => (
  <Svg
    width={38}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.257.29C.116.456 0 .68 0 .787c0 .116 1.575 3.357 3.497 7.21L7.003 15l-3.506 7.003C1.575 25.856 0 29.105 0 29.22c0 .315.489.779.82.779.208 0 34.675-13.707 35.793-14.23.506-.24.672-1.027.282-1.375C36.646 14.171 1.102 0 .795 0 .58 0 .456.066.258.29Zm17.188 8.138a12316.21 12316.21 0 0 0 13.922 5.577c.092.042-5.022.075-11.353.075l-11.528.008L5.71 8.511C4.177 5.453 2.9 2.859 2.867 2.751L2.81 2.57l.44.174c.24.091 6.63 2.652 14.196 5.685Zm13.922 7.566c-.248.1-27.605 11.064-28.118 11.263l-.44.174.058-.182c.034-.108 1.31-2.702 2.843-5.768l2.776-5.57 11.528.009c6.331 0 11.445.033 11.353.075Z"
      fill="#CCC"
    />
  </Svg>
);

export default Add;
