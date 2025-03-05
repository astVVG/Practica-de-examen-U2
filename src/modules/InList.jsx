import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

export default function InList({ image, name, onPress, isFavourite }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.songName}>{name}</Text>
        <Text style={styles.artist}>The Weeknd</Text>
      </View>
      <Icon 
        name={isFavourite ? 'heart' : 'heart-o'} 
        type='font-awesome' 
        size={25} 
        color='green' 
        style={styles.icon} 
      />
      <Icon name='ellipsis-v' type='font-awesome' size={25} color='white' />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  songName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    color: 'gray',
    fontSize: 14,
  },
  icon: {
    marginRight: 10,
  },
});
