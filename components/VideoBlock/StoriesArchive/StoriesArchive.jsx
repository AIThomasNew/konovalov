import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { USERS } from '../../../data/users';

const StoriesArchive = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.7}>
              <Image source={{ uri: story.image }} style={styles.story} />
            </TouchableOpacity>
            <Text style={styles.text}>
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

const styles = StyleSheet.create({
  story: {
    width: 75,
    height: 75,
    marginTop: 7,
    marginLeft: 7,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#e84a1e',
  },
});

export default StoriesArchive;

{
  /* <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {storiesJson.map((item, index) => (
            <View style={styles.view} key={index}>
              <LinearGradient
                style={styles.gradient}
                colors={['#e24128', '#e84a1e']}
              >
                <TouchableOpacity activeOpacity={0.7}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.photo }}
                  />
                </TouchableOpacity>
              </LinearGradient>
              <Text style={styles.textStyle}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View> */
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     borderBottomWidth: 1,
//     borderColor: '#D5D1D1',
//     backgroundColor: '#EFEAEA',
//   },
//   view: {
//     width: 85,
//     padding: 1.5,
//     marginLeft: 3,
//     borderRadius: 50,
//   },
//   gradient: {
//     margin: 3,
//     padding: 3,
//     borderRadius: 38,
//   },
//   imageStyle: {
//     width: 70,
//     height: 70,
//     borderWidth: 2.5,
//     borderColor: '#fff',
//     borderRadius: 70 / 2,
//   },
//   textStyle: {
//     fontSize: 12,
//     marginTop: 4,
//     textAlign: 'center',
//     textTransform: 'lowercase',
//   },
  // videoContainer: {
  //   flex: 4,
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   backgroundColor: '#EFEAEA',
  // },
// });
