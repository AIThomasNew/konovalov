import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Like from '../../Tabs/iconHomeScreen/like/Like';
import LikeActive from '../../Tabs/iconHomeScreen/like/LikeActive';
import Donate from '../../Tabs/iconHomeScreen/donate/Donate';
import DonateActive from '../../Tabs/iconHomeScreen/donate/DonateActive';

const HomeButtons = () => {
  const [like, setLike] = useState(false);
  const [donate, setDonate] = useState(false);
  const clickDonate = () => setDonate(!donate);
  const clickLike = () => {
    if (like) {
      return setLike(like - 1);
    } else {
      return setLike(like + 1);
    }
  };

  return (
    <View style={styles.buttons}>
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={clickLike} style={styles.like}>
          {like ? <LikeActive /> : <Like />}
        </TouchableOpacity>
        <Text style={{ fontSize: 18 }}>{like}</Text>
      </View>

      <TouchableOpacity onPress={clickDonate} style={styles.donate}>
        {donate ? <DonateActive /> : <Donate />}
      </TouchableOpacity>
    </View>
  );
};
export default HomeButtons;

const styles = StyleSheet.create({
  buttons: {
    marginRight: 30,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    // borderWidth: 1,
  },
  like: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: 50,
    width: 50,
    color: 'black',
    marginRight: 15,
    shadowOpacity: 1.0,
    shadowColor: '#C8C5C5',
    backgroundColor: 'white',
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },
  likeContainer: {
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  donate: {
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
});
