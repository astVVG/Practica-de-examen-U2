import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Image, Icon } from '@rneui/base';
import React from 'react';
import { map } from 'lodash';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import InList from './InList';

const imageList = [
  'https://i.ebayimg.com/images/g/uNwAAOSwz4FltUFE/s-l1200.jpg',
  'https://i.scdn.co/image/ab67616d0000b2737fcead687e99583072cc217b',
  'https://i.scdn.co/image/ab67616d0000b2730cc6c8a864d2d16a2bc507d4'
];

const songs = [
  { id: 1, name: 'STARBOY', image: imageList[0], isFavourite: true },
  { id: 2, name: 'AS YOU ARE', image: imageList[1], isFavourite: false },
  { id: 3, name: 'WANDERLUST', image: imageList[2], isFavourite: false },
  { id: 4, name: 'PARTY MONSTER', image: imageList[0], isFavourite: false },
  { id: 5, name: 'IN THE NIGHT', image: imageList[1], isFavourite: false }
];

const PlaylistScreen = (props) => {
  const navigation = props.navigation || useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.pagerViewContainer}>
          <PagerView style={styles.pagerView} initialPage={0}>
            {map(imageList, (image, index) => (
              <View style={styles.imageContainer} key={index}>
                <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                  <Icon name="arrow-right" type="font-awesome" size={25} color="white" />
                </TouchableOpacity>
              </View>
            ))}
          </PagerView>

          {/* Texto de la playlist */}
          <Text style={styles.playlistText}>The Weeknd Playlist</Text>

          {/* Botón de Play -> a Song */}
          <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('Song')}>
            <Icon name="play" type="font-awesome" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Featuring</Text>
        <View>
          {map(songs, (song) => (
            <InList 
              key={song.id} 
              name={song.name} 
              image={song.image} 
              isFavourite={song.isFavourite} 
              onPress={() => navigation.navigate('Song')} 
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  pagerViewContainer: {
    position: 'relative', 
  },
  pagerView: {
    height: 250,
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  playlistText: {
    position: 'absolute',
    bottom: 20, 
    left: 15,   
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    bottom: 15, 
    right: 15,  
    width: 60,
    height: 60,
    backgroundColor: '#1DB954',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
});

export default PlaylistScreen;
