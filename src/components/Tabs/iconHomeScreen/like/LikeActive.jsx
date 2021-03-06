import * as React from 'react';
import { View } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const LikeActive = (props) => (
  <View style={{ paddingTop: 5, paddingLeft: 2 }}>
    <Svg
      width={30}
      height={26}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7.741c0 1.645.117 2.524.84 4.083 1.06 2.288 1.862 3.041 3.228 4.799.382.492 1.029 1.089 1.456 1.532l2.283 2.229c.771.717 2.734 2.322 3.593 2.969l3.541 2.552c.29-.067.945-.59 1.206-.787.409-.308.789-.56 1.189-.861 1.175-.885 2.295-1.874 3.348-2.687.117-.091.135-.115.249-.22 1.053-.98 3.2-2.776 3.91-3.706.234-.306.447-.433.729-.796.101-.13.15-.158.25-.277l1.793-2.25C28.645 12.956 30 10.352 30 8.62V8.02c-.004-.646-.037-.959-.269-1.885-.328-1.312-1.178-2.745-2.119-3.682-.986-.982-2.295-1.8-3.646-2.154-2.831-.74-5.674-.094-7.808 1.803-.18.16-.427.406-.586.586-.19.215-.352.511-.572.659-.117-.079-.706-.825-1.127-1.217l-1.396-1.007C10.862.155 9.685.007 7.793.007c-1.16 0-2.38.311-3.215.652C1.698 1.833 0 4.653 0 7.741Z"
        fill="url(#a)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={5.442}
          y1={23.116}
          x2={24.558}
          y2={2.79}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E54D22" />
          <Stop offset={0.302} stopColor="#E53541" />
          <Stop offset={1} stopColor="#E61C61" />
        </LinearGradient>
      </Defs>
    </Svg>
  </View>
);

export default LikeActive;
