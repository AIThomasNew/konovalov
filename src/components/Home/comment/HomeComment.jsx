import React, { useState, useCallback, useLayoutEffect } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { auth, db } from '../../../utils/firebase';
import { Keyboard, View } from 'react-native';

const HomeComment = () => {
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    const unsubscribe = db
      .collection('comments')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user,
          }))
        )
      );
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection('comments').add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      renderBubble={(props) => {
        return (
          <Bubble
            {...props}
            // textStyle={{
            //   right: {
            //     color: 'red',
            //   },
            // }}
            wrapperStyle={{
              right: {
                backgroundColor: '#d81b60',
              },
            }}
          />
        );
      }}
      keyboardShouldPersistTaps="always"
      messages={messages}
      showAvatarForEveryMessage={false}
      onSend={(messages) => onSend(messages)}
      user={{
        // _id: 1,
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: auth?.currentUser?.photoURL,
      }}
    />
  );
};

export default HomeComment;

// listViewProps={{
//   keyboardDismissMode: 'on-drag'
// }}
//   style={{ flexGrow: 1 }}
