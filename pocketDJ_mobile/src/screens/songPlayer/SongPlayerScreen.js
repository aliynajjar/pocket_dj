import { View, Text,Image} from "react-native";
import styles from './styles';
import {useState,useEffect} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import RemixPlayer from "../../components/RemixPlayer/RemixPlayer";
import SongPlayer from "../../components/SongPlayer/SongPlayer";
import { useRoute } from '@react-navigation/native';

const SongPlayerScreen = () => {
  const [moodTitle, setMoodTitle] = useState('');
  const [moodImage, setMoodImage] = useState('');
  const [AudioFile, setAudioFile] = useState('');
  const [Songduration, setDuration] = useState('');
  const route = useRoute();
  const { title, image, AudioURL} = route.params;

  useEffect(() => {
    setMoodTitle(title);
    setMoodImage(image);
    setAudioFile(AudioURL);
    // setDuration(duration);
    console.log(AudioURL)
    }, []);


  return (
  <SafeAreaView style={styles.container}>
  <View style={styles.cover_container}>
  <Image source={moodImage}
  style={styles.imageStyle}></Image>
  </View>
  <View style={styles.mood_title}>
    <Text style={styles.mood_title_text}>{moodTitle}</Text>
  </View>
  <SongPlayer
  AudioURL = {AudioURL}
  duration = {Songduration}
   />
  </SafeAreaView>

  )}

export default SongPlayerScreen;