import { StyleSheet, Text, Button, View, Alert, StatusBar, Dimensions } from 'react-native'
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe';


const MovieTrailer = ({ route }) => {
  const { movieId } = route.params;
  const screenDimension = Dimensions.get('screen')

  const [trailerUrl, setTrailerUrl] = useState('');
  const [videoId, setVideoId] = useState('');
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    const fetchTrailer = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=0ce9bf4ea76846d56e5cc8485844bbda&language=en-US`);
      const data = await response.json();
      // console.log(data.results[0].key)
      if (data.results.length > 0 && data.results[0].site === 'YouTube') {
        setTrailerUrl(`https://www.youtube.com/watch?v=${data.results[0].key}`);
        // setTrailerUrl('https://www.youtube.com/watch?v=PARfU2Vi694&ab_channel=FilmeyBox');
        setVideoId(data.results[0].key)
      } else {
        setTrailerUrl('https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1');
      }
    };
    fetchTrailer();
  }, []);

  return (
    <View style={styles.container}>
      {trailerUrl ? (
        // <Video style={styles.video}
        //   source={{ uri: trailerUrl }}
        //   useNativeControls
        //   resizeMode="contain"
        //   isLooping
        //   paused={false}
        //   controls={true}
        // />

        <View>
          <YoutubePlayer
            // style={styles.video}
            height={300}
            width={screenDimension.width}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
    backgroundColor: "#000",
    padding: 20,
    paddingTop: Constants.statusBarHeight,

  },
  video: {
    width: '100%',
    height: '100%',
    backgroundColor: "#000",
    color: "#fff",
  },
});

export default MovieTrailer;
