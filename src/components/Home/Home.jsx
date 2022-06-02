import React, { useState, useEffect, useRef } from 'react'
import {
  Modal,
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Keyboard,
  TouchableOpacity,
  Animated,
  Button,
} from 'react-native'
import { Divider } from 'react-native-elements'
import { Broadcast } from './broadcast/Broadcast.jsx'
import HomeComment from './comment/HomeComment'
import Like from '../Tabs/iconHomeScreen/like/Like.jsx'
import LikeActive from '../Tabs/iconHomeScreen/like/LikeActive'
import DonateActive from '../Tabs/iconHomeScreen/donate/DonateActive'
import * as Clipboard from 'expo-clipboard'
import { AntDesign } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible)
  const scaleValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    toggleModal()
  }, [visible])

  const toggleModal = () => {
    if (visible) {
      setShowModal(true)
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start()
    } else {
      setTimeout(() => setShowModal(false), 200)
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  )
}

const HomeScreen = () => {
  // clipBoard
  const copyToClipboard = () => {
    Clipboard.setString('2200 0202 3436 1378')
  }

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
      <ModalPoup visible={visible}>
        {/* <View style={{ alignItems: 'center' }}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View> */}

        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: 'hidden',
            zIndex: 1,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              height: '100%',
              padding: 20,
            }}>
            <Image
              style={{ width: '10%', height: '16%' }}
              source={require('./donate/image/chip.png')}
            />
            <Image
              style={{ width: '18%', height: '10%' }}
              source={require('./donate/image/visa.png')}
            />
          </View>

          <Image
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              opacity: 0.3,
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            source={require('./donate/image/map.png')}
          />
        </View>

        {/* <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            // onPress={() => setVisible(false)}
            onPress={copyToClipboard}
            style={{
              position: 'absolute',
              borderWidth: 1,
            }}>
            2200 0202 3436 1378
          </Text>
        </View> */}
      </ModalPoup>

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
    height: '30%',
    backgroundColor: '#c91754',
    // paddingHorizontal: 20,
    // paddingVertical: 30,
    borderRadius: 10,
    elevation: 20,
    zIndex: 2,
    overflow: 'hidden',
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // header: {
  //   width: '100%',
  //   height: 40,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  // },

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
