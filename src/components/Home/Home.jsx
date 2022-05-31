import React, { useState } from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, View, Keyboard, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements'
import { Broadcast } from './broadcast/Broadcast.jsx'
import HomeComment from './comment/HomeComment'
import Like from '../Tabs/iconHomeScreen/like/Like.jsx'
import LikeActive from '../Tabs/iconHomeScreen/like/LikeActive'
import DonateActive from '../Tabs/iconHomeScreen/donate/DonateActive'

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible)

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <View style={[styles.modalContainer]}></View>
      </View>
    </Modal>
  )
}

const HomeScreen = () => {
  // modal card
  const [visible, setVisible] = useState(false)

  // keyboard
  const dismissKeyboard = () => Keyboard.dismiss() // убрать клавиатуру

  // likes
  const [likes, setLikes] = useState(false)
  const clickLike = () => {
    if (likes) {
      return setLikes(likes - 1)
    } else {
      return setLikes(likes + 1)
    }
  }

  // style neu
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
            ]}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalPoup />
      <View style={styles.broadcast}>
        <Broadcast />
      </View>
      <TouchableOpacity activeOpacity={1} onPress={dismissKeyboard}>
        <View style={styles.buttons}>
          <View style={styles.likeContainer}>
            <TouchableOpacity onPress={clickLike} style={styles.like}>
              <NeuMorph>{likes ? <LikeActive /> : <Like />}</NeuMorph>
            </TouchableOpacity>

            <Text style={{ fontSize: 18 }}>{likes}</Text>
          </View>

          {/* DONATE  */}
          <TouchableOpacity onPress={() => setVisible(true)} style={styles.donate}>
            <NeuMorph>{<DonateActive />}</NeuMorph>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Divider width={1} orientation="vertical" />
      <HomeComment />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  broadcast: {
    maxHeight: 211,
  },
  contentContainer: {
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
  },

  /////////////

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
})
