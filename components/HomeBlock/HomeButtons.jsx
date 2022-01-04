import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Like from './HomeIcon/Like';
import LikeActive from './HomeIcon/LikeActive';
import Donate from './HomeIcon/Donate';
import DonateActive from './HomeIcon/DonateActive';

const HomeButtons = () => {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.likeDonate}>
        <LikeActive />
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeDonate}>
        <DonateActive />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButtons;

const styles = StyleSheet.create({
  likeDonate: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    width: 50,

    shadowOpacity: 1.0,
    shadowColor: '#C8C5C5',
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },

  buttons: {
    marginRight: 30,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
});

// --- пока не нужно ---

// likeDonateTwo: {
//   flexDirection: 'row',
//   flexWrap: 'wrap',
//   borderRadius: 30,
//   shadowOffset: { width: -8, height: -8 },
//   shadowColor: '#d4cfcf',
//   shadowOpacity: 1.0,
//   shadowRadius: 10,
// marginTop: 12,
// marginBottom: 12,
// },

// shadowOpacity: 1.0,
// shadowColor: '#C8C5C5',
// backgroundColor: 'white',
// shadowOffset: { width: -12, height: -12 },
// shadowRadius: 6,
// elevation: 2,
