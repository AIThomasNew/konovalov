import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { USERS } from '../../../data/users';

const StoriesArchive = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={styles.view}>
            <LinearGradient
              style={styles.gradient}
              colors={['#e24128', '#e84a1e']}
            >
              <TouchableOpacity activeOpacity={0.7}>
                <Image
                  style={styles.imageStyle}
                  source={{ uri: story.image }}
                />
              </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.textStyle}>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + '...'
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default StoriesArchive;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#D5D1D1',
    paddingBottom: 8,
  },
  view: {
    width: 85,
    padding: 1.5,
    marginLeft: 3,
    borderRadius: 50,
  },
  gradient: {
    margin: 3,
    padding: 3,
    borderRadius: 38,
  },
  imageStyle: {
    width: 70,
    height: 70,
    borderWidth: 2.5,
    borderColor: '#fff',
    borderRadius: 70 / 2,
  },
  textStyle: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  videoContainer: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
