import React, { useState, useEffect, useRef } from 'react'
import { Modal, Image, Text, SafeAreaView, StyleSheet, View, Keyboard, TouchableOpacity, Animated } from 'react-native'
import { Divider } from 'react-native-elements'
import { Broadcast } from './broadcast/Broadcast.jsx'
import { AntDesign } from '@expo/vector-icons'
import HomeComment from './comment/HomeComment'
import Like from '../Tabs/iconHomeScreen/like/Like.jsx'
import LikeActive from '../Tabs/iconHomeScreen/like/LikeActive'
import DonateActive from '../Tabs/iconHomeScreen/donate/DonateActive'
import * as Clipboard from 'expo-clipboard'

const ModalPoup = ({ visible, children, cancelModal }) => {
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
        <View style={styles.header}>
          <TouchableOpacity onPress={cancelModal}>
            <AntDesign name="close" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>{children}</Animated.View>
      </View>
    </Modal>
  )
}

const HomeScreen = () => {
  const [visible, setVisible] = useState(false)
  const cancelModal = () => setVisible(false)
  const dismissKeyboard = () => Keyboard.dismiss() // убрать клавиатуру
  const copyToClipboard = () => Clipboard.setString('2200020234361378')
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

  const [likes, setLikes] = useState(false)
  const clickLike = () => {
    if (likes) {
      return setLikes(likes - 1)
    } else {
      return setLikes(likes + 1)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ModalPoup cancelModal={cancelModal} visible={visible}>
        <View style={styles.cardFront}>
          <Image style={styles.mapImg} source={require('../../assets/image/map.png')} />

          <View style={styles.row}>
            <Image style={{ width: 30, height: 30 }} source={require('../../assets/image/chip.png')} />
            <Image style={{ width: 60, height: 15 }} source={require('../../assets/image/mir.png')} />
          </View>

          <TouchableOpacity onPress={copyToClipboard}>
            <Text style={styles.cardNo}>2200 0202 3436 1378</Text>
          </TouchableOpacity>

          <View>
            <View style={styles.cardHolder}>
              <Text style={{ color: '#fff', fontSize: 11 }}>CARD HOLDER</Text>
              <Text style={{ color: '#fff', fontSize: 11 }}>VALID TILL</Text>
            </View>

            <View style={styles.cardName}>
              <Text style={{ color: '#fff', fontSize: 17 }}>ALEXANDER KONOVALOV</Text>
              <Text style={{ color: '#fff', fontSize: 17 }}>08 / 26</Text>
            </View>
          </View>
        </View>
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
  cardFront: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mapImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.3,
    top: 0,
    left: 0,
    zIndex: -1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  cardNo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: 65,
    fontSize: 27,
    color: 'rgb(201, 201, 201)',
    paddingTop: 15,
  },

  cardHolder: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    color: 'rgb(201, 201, 201)',
    height: 25,
  },
  cardName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 14,
    color: '#fff',
    height: '40%',
  },
  modalContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#c91754',
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
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 30,
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
  buttons: {
    marginRight: 30,
    marginLeft: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
  },
  like: {
    marginRight: 15,
  },
  likeContainer: {
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
