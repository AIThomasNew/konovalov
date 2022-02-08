import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Like from '../../../assets/images/iconHomeScreen/like/Like';
import LikeActive from '../../../assets/images/iconHomeScreen/like/LikeActive';
import Donate from '../../../assets/images/iconHomeScreen/donate/Donate';
import DonateActive from '../../../assets/images/iconHomeScreen/donate/DonateActive';

const HomeButtons = () => {
  const { like, setLike } = useState(false);
  const activeLike = () => setLike(!like);

  const { donate, setDonate } = useState();

  return (
    <View style={styles.buttons}>
      <TouchableOpacity onPress={activeLike} style={styles.like}>
        {like ? <LikeActive /> : <Like />}
      </TouchableOpacity>
      <TouchableOpacity onPress={setDonate} style={styles.donate}>
        {donate ? <DonateActive /> : <Donate />}
      </TouchableOpacity>
    </View>
  );
};

export default HomeButtons;

const styles = StyleSheet.create({
  like: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 30,
    height: 40,
    width: 120,
    paddingLeft: 18,
    color: 'black',

    shadowOpacity: 1.0,
    shadowColor: '#C8C5C5',
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },

  donate: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 30,
    height: 40,
    width: 120,
    paddingRight: 18,

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
