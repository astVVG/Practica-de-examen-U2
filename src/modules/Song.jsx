import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';

const Song = () => {
  const navigation = useNavigation();
  const currentTime = "0:52";
  const totalTime = "2:59";

  return (
    <View style={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" type="font-awesome" size={25} color="white" />
      </TouchableOpacity>

      {/* Contenedor con el título*/}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i.ebayimg.com/images/g/uNwAAOSwz4FltUFE/s-l1200.jpg' }}
          style={styles.albumImage}
          resizeMode="cover"
        />
        {/* Texto - info de la cancion */}
        <View style={styles.overlayTextContainer}>
          <Text style={styles.songTitle}>STARBOY</Text>
          <Text style={styles.artist}>The Weeknd</Text>
        </View>
      </View>

      {/* Barra de progreso */}
      <Slider
        style={styles.progressBar}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="white"
        maximumTrackTintColor="gray"
        thumbTintColor="white"
        value={0.3}
      />

      {/* Indicadores de tiempo */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <Text style={styles.timeText}>{totalTime}</Text>
      </View>

      {/* Controles de reproducción */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity>
          <Icon name="random" type="font-awesome" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="step-backward" type="font-awesome" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="play" type="font-awesome" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="step-forward" type="font-awesome" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="repeat" type="font-awesome" size={22} color="white" />
        </TouchableOpacity>
      </View>

      {/* Botón de Lyrics */}
      <TouchableOpacity style={styles.lyricsButton}>
        <Text style={styles.lyricsText}>Lyrics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  albumImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: 2,
    left: 5,
  },
  songTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  progressBar: {
    width: '90%',
    height: 40,
    marginBottom: 5,
  },
  timeContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 14,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lyricsButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  lyricsText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Song;