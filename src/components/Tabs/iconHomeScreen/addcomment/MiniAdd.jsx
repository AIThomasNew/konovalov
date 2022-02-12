import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MiniAdd = (props) => (
  <Svg
    width={19}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.128.145C.058.228 0 .34 0 .394c0 .058.787 1.678 1.749 3.605L3.5 7.5 1.75 11.001C.787 12.928 0 14.553 0 14.611c0 .157.244.389.41.389.104 0 17.337-6.854 17.897-7.115.252-.12.335-.513.14-.687C18.324 7.086.552 0 .398 0 .29 0 .228.033.129.145Zm8.594 4.07c3.784 1.516 6.916 2.771 6.962 2.788.045.02-2.511.037-5.677.037l-5.764.004-1.388-2.788a148.405 148.405 0 0 1-1.421-2.88l-.03-.091.22.087c.12.045 3.315 1.326 7.098 2.842Zm6.962 3.782c-.125.05-13.803 5.532-14.06 5.632l-.22.087.03-.092c.016-.054.654-1.35 1.421-2.884l1.388-2.784 5.764.004c3.166 0 5.722.017 5.677.037Z"
      fill="#5A5A5A"
    />
  </Svg>
);

export default MiniAdd;