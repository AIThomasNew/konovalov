import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Like from '../../Tabs/iconHomeScreen/like/Like';
import LikeActive from '../../Tabs/iconHomeScreen/like/LikeActive';
import Donate from '../../Tabs/iconHomeScreen/donate/Donate';
import DonateActive from '../../Tabs/iconHomeScreen/donate/DonateActive';
import { auth, db } from '../../../utils/firebase';

const HomeButtons = () => {
  const [donate, setDonate] = useState(false);
  // const [likes, setLikes] = useState([]);
  const [likes, setLikes] = useState(false);
  const clickDonate = () => setDonate(!donate);
  const clickLike = () => {
    if (likes) {
      return setLikes(likes - 1);
    } else {
      return setLikes(likes + 1);
    }
  };

  //* кнопка Neumorphism
  const NeuMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 50,
                height: size || 50,
                borderRadius: size / 2 || 50 / 2,
              },
              style,
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };

  // useEffect(() => {
  //   onSnapshot(collection(db, id, 'likes'), (snapshot) =>
  //     setLikes(snapshot.docs)
  //   );
  // }, [db]);

  // useEffect(() => {
  //   db.collection('likes').onSnapshot((snapshot) =>
  //     setLikes(snapshot.docs.map((doc) => doc.data()))
  //   );
  // }, []);

  // snapshot.docs.map((doc) => ({
  //   _id: doc.data()._id,
  //   user: doc.data().user,
  // }))

  // const clickLike = useCallback((likes = []) => {
  //   setLikes((previousLikes) => GiftedChat.append(previousLikes, likes));
  //   const { _id, user } = likes[0];
  //   db.collection('likes').add({
  //     _id,
  //     user,
  //   });
  // }, []);

  // const clickLike = async () => {
  //   await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
  //     username: session.user.username,
  //   });
  // };

  return (
    <View style={styles.buttons}>
      <View style={styles.likeContainer}>
        <TouchableOpacity onPress={clickLike} style={styles.like}>
          <NeuMorph>{likes ? <LikeActive /> : <Like />}</NeuMorph>
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>{likes}</Text>
      </View>

      <TouchableOpacity onPress={clickDonate} style={styles.donate}>
        <NeuMorph>{donate ? <DonateActive /> : <Donate />}</NeuMorph>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButtons;

const styles = StyleSheet.create({
  inner: {
    backgroundColor: '#fff',
    borderColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  topShadow: {
    shadowOffset: {
      width: -6,
      height: -2,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FBFFFF',
  },

  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#d9d9d9',
  },

  playing: {
    color: 'gray',
    fontWeight: '800',
  },

  //////////////////

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
    marginRight: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 30,
    // height: 50,
    // width: 50,
    // color: 'black',
    // shadowOpacity: 1.0,
    // shadowColor: '#C8C5C5',
    // backgroundColor: 'white',
    // shadowOffset: { width: 2, height: 3 },
    // shadowRadius: 6,
    // elevation: 2,
  },
  likeContainer: {
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // donate: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 30,
  //   height: 50,
  //   width: 50,
  //   shadowOpacity: 1.0,
  //   shadowColor: '#C8C5C5',
  //   backgroundColor: 'white',
  //   shadowOffset: { width: 2, height: 3 },
  //   shadowRadius: 6,
  //   elevation: 2,
  // },
});
