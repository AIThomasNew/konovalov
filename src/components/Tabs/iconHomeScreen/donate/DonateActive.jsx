import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

const DonateActive = (props) => (
  <Svg width={25} height={29} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M3.713 23.084 0 23.09l.004-3.282h3.709v-2.925H.004v-4.131h3.709V.034C7.847.034 11.21 0 15.346 0c12.853 0 12.89 16.878 0 16.878H7.449v2.919l10.53.01-.004 3.283-10.526.004V29H3.713v-5.916Zm3.736-10.331h8.796c6.351 0 6.314-8.457 0-8.457H7.449v8.457Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient id="a" x1={1.304} y1={21.794} x2={22.17} y2={5.278} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#E54D22" />
        <Stop offset={0.302} stopColor="#E53541" />
        <Stop offset={1} stopColor="#E61C61" />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default DonateActive
